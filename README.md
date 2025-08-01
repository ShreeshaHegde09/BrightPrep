# BrightPrep – AI-Powered Mock Interview Platform

🚀 [Live Demo](https://bright-prep-ai.vercel.app/)

BrightPrep is a full-stack, AI-powered mock interview platform designed to help job seekers prepare confidently for real-world interviews. It features real-time voice-based mock interviews, AI-generated feedback, scoring analytics, and a clean, modern user interface.

---

## 🧠 Key Features

- **🎙️ AI-Powered Mock Interviews**  
  Simulate realistic interviews using AI voice agents powered by Vapi AI and natural language understanding.

- **📊 Real-Time Feedback & Scoring**  
  Get instant feedback on your responses including communication clarity, confidence, and content quality.

- **🧑‍💼 Role-Based Dashboards**  
  Personalized dashboards for different user roles to track interview history, scores, and feedback.

- **🔐 Secure Authentication & Data Storage**  
  User authentication and secure data storage handled by Firebase.

- **📱 Responsive & Clean UI**  
  Built using TailwindCSS and shadcn/ui for a modern and mobile-friendly experience.

- **📈 Interview Analytics & Progress Tracking**  
  Visual charts and metrics to analyze performance trends and improvement areas.

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
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Vapi AI Key
VAPI_API_KEY=your_vapi_api_key

# Google Gemini Key
GEMINI_API_KEY=your_gemini_api_key
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

