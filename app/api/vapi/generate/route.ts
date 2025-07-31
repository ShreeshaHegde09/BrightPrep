import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { db } from "@/firebase/admin";

export async function GET() { 
    return Response.json({ success: true, data: "THANK YOU!" }, { status: 200 });
}

export async function POST(request: Request) {
    try {
        const { type, role, level, techstack, amount, userid } = await request.json();
        
        // Validate required fields
        if (!type || !role || !level || !techstack || !amount || !userid) {
            return Response.json({ 
                success: false, 
                error: "Missing required fields" 
            }, { status: 400 });
        }

        // Validate environment variables
        if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
            console.error("GOOGLE_GENERATIVE_AI_API_KEY is not set");
            return Response.json({ 
                success: false, 
                error: "AI service configuration error" 
            }, { status: 500 });
        }

        const { text: questions } = await generateText({
            model: google("gemini-2.0-flash-001"),
            prompt: `Prepare questions for a job interview
            The job role is ${role}.
            The job experience level is ${level}.
            The tech stack used in the job is: ${techstack}.
            The focus between behavioural and technical questions should lean towards: ${type}.
            The amount of questions required is: ${amount}.
            Please return only the questions, without any additional text.
            The questions are going to be read by a voice assistant so do not use "/" or "*" or any other special characters which might break the voice assistant.
            Return the questions formatted like this:
            ["Question 1", "Question 2", "Question 3"]
            
            Thank you! <3`
        });

        // Parse questions safely
        let parsedQuestions;
        try {
            parsedQuestions = JSON.parse(questions);
        } catch (parseError) {
            console.error("Failed to parse questions:", parseError);
            return Response.json({ 
                success: false, 
                error: "Failed to generate questions" 
            }, { status: 500 });
        }

        const interview = {
            role, 
            type, 
            level,
            techstack: Array.isArray(techstack) ? techstack : techstack.split(',').map((tech: string) => tech.trim()),
            questions: parsedQuestions,
            userId: userid,
            finalized: false, // Changed from finalised to finalized for consistency
            createdAt: new Date().toISOString()
        };

        const interviewRef = await db.collection('interviews').add(interview);

        return Response.json({ 
            success: true, 
            interviewId: interviewRef.id 
        }, { status: 200 });
        
    } catch (error: any) {
        console.error("Error in interview generation:", error);
        
        // Handle specific errors
        if (error.message?.includes('API key')) {
            return Response.json({ 
                success: false, 
                error: "AI service configuration error" 
            }, { status: 500 });
        }
        
        return Response.json({ 
            success: false, 
            error: error.message || "Internal server error" 
        }, { status: 500 });
    }
}