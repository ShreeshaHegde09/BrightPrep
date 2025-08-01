# BrightPrep – AI-Powered Mock Interview Platform

🚀 [Live Demo](https://bright-prep-ai.vercel.app/)

BrightPrep is a full-stack, AI-powered mock interview platform designed to help job seekers prepare confidently for real-world interviews. It features real-time voice-based mock interviews, AI-generated feedback, scoring analytics, and a clean, modern user interface.

---

## 🧠 Key Features

- **🎙️ AI-Powered Mock Interviews**  
  Simulate realistic interviews using AI voice agents powered by Vapi AI and natural language understanding.

- **📊 Real-Time Feedback & Scoring**  
  Get instant feedback on your responses including communication clarity, confidence, and content quality.

- **🔐 Secure Authentication & Data Storage**  
  User authentication and secure data storage handled by Firebase.

- **📱 Responsive & Clean UI**  
  Built using TailwindCSS and shadcn/ui for a modern and mobile-friendly experience.

- **📈 Interview Analytics & Progress Tracking**  
  Score rating metrics to analyze overall performance trends and improvement areas.

- **🔗 Google Gemini Integration**  
  Delivers contextual and structured suggestions to improve interview skills.

---

## 🛠️ Tech Stack

| Tech/Tool        | Purpose                                |
|------------------|----------------------------------------|
| Next.js          | Frontend framework                     |
| Firebase         | Auth, Firestore database               |
| TailwindCSS      | Utility-first styling                  |
| shadcn/ui        | Prebuilt React UI components           |
| Vapi AI          | AI voice agent for real-time mock interviews |
| Google Gemini    | Context-aware AI feedback engine       |

---

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/ShreeshaHegde09/BrightPrep.git
cd BrightPrep
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory and add your configuration keys:

```env
# Firebase Configuration
FIREBASE_SERVICE_ACCOUNT_KEY= your_firebase_service_account_key(json_format_without_newline_charecter(\n))

# Vapi AI Key
NEXT_PUBLIC_VAPI_WORKFLOW_ID=your_vapi_workflow_id
NEXT_PUBLIC_VAPI_WEB_TOKEN=your_vapi_web_token

# Google Gemini Key
GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key
```

### 4. Run the Development Server

```bash
npm run dev
```

Open `http://localhost:3000` to view the app in your browser.

---

## 🧪 Usage

1. Sign up or log in to your account.
2. Choose your role and interview preferences.
3. Start a mock interview with the AI voice agent.
4. Respond to the interview questions naturally using your voice.
5. Get real-time scores, suggestions, and a breakdown of your performance.
6. View interview history and performance analytics on your dashboard.

---

## 🔮 Future Enhancements

* 🎥 Add video-based interview simulations with facial analysis.
* 🤝 Peer-to-peer mock interview functionality.
* 📚 AI-generated coaching scripts for personalized improvement.
* 📌 More industry-specific and role-based question banks.
* 📈 Advanced analytics and comparison metrics.

---

## 👨‍💻 Author

**Shreesha Raghupati Hegde**
🔗 [GitHub](https://github.com/ShreeshaHegde09)
🌐 [Live Project](https://bright-prep-ai.vercel.app/)

---

