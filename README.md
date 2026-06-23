# Converso

Converso is an AI-powered voice assistant designed to make learning more interactive through natural voice-to-voice conversations. Users can choose a topic they want to learn and engage in real-time spoken conversations with AI, creating an engaging and personalized learning experience.

## 🚀 Live Demo

🔗 **Live URL:** [[Live Demo Link](https://converso-virid.vercel.app/)]

## ✨ Features

* 🎙️ Real-time voice-to-voice conversations with AI
* 🧠 Personalized learning on user-selected topics
* 🔊 Speech-to-Text (STT) and Text-to-Speech (TTS) integration
* 🤖 AI-generated contextual responses
* 📚 Interactive and conversational learning experience
* 🔐 User authentication and session management
* 📱 Responsive and modern user interface

## 🛠️ Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS
* shadcn/ui

### Backend & Database

* PostgreSQL
* Supabase

### AI & Voice Stack

* OpenAI API / Gemini API
* Vapi AI
* Speech-to-Text
* Text-to-Speech

## 🏗️ How It Works

1. Users select a topic they want to learn.
2. The application starts a voice session.
3. User speech is converted to text.
4. The AI processes the query and generates a response.
5. The response is converted back to speech and played to the user.
6. The conversation continues naturally in real time.

## ⚙️ Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/converso.git
```

### Navigate to the project

```bash
cd converso
```

### Install dependencies

```bash
npm install
```

### Configure environment variables

Create a `.env` file and add:

```env
DATABASE_URL=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

OPENAI_API_KEY=
VAPI_API_KEY=
```

### Run the development server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## 🚧 Challenges Faced

* Managing API costs for voice and AI services.
* Handling database pauses due to free-tier limitations.
* Ensuring smooth real-time voice interactions with minimal latency.

## 🎯 What I Learned

Building Converso gave me hands-on experience with:

* Conversational AI systems
* Voice interfaces (STT/TTS)
* Real-time communication workflows
* Deploying and maintaining production AI applications
* Handling real-world infrastructure and scalability challenges

## 📄 License

This project is licensed under the MIT License.
