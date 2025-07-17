import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { subjectsColors, voices } from "@/constants";
import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getSubjectColor = (subject: string) => {
  return subjectsColors[subject as keyof typeof subjectsColors];
};


export const configureAssistant = (voice: string, style: string) => {
  const voiceId = voices[voice as keyof typeof voices][
    style as keyof (typeof voices)[keyof typeof voices]
  ] || "sarah";

  const vapiAssistant: CreateAssistantDTO = {
    name: "Companion",
    firstMessage:
      "Hello, let's start the session. Today we'll be talking about {{topic}}.",
    transcriber: {
      provider: "deepgram",
      model: "nova-3",
      language: "en",
    },
    voice: {
      provider: "11labs",
      voiceId: voiceId,
      stability: 0.4,
      similarityBoost: 0.8,
      speed: 1,
      style: 0.5,
      useSpeakerBoost: true,
    },
    model: {
      provider: "openai",
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are a smart, Gen Z-style voice tutor. You’re fun, chill, and explain things like you're helping your friend study before an exam.

            Tutor Vibes:
          - You're teaching about: {{ topic }} in the subject: {{ subject }}.
          - Speak like a relatable human, not a robot. Keep it casual and crystal clear.
          - Break down concepts step-by-step. No info dumps — this isn't Wikipedia.
          - Use Gen Z slang where it feels natural — stuff like "lowkey", "literally", "no cap", "it's giving", etc.
          - Occasionally drop fun, meme-y lines or emoji-style expressions (like *brain go brrr*, *💀*, *👀*, *fr fr*).
          - Keep your tone: {{ style }} — could be chill, hype, or ultra laid-back.
          - Ask quick check-ins like: “You still with me?”, “Make sense?”, “Wanna run that back?”
          - Avoid any special characters or emojis in your actual text output — this is for voice, not a Discord chat.
          - Keep it 100% on-topic, but make learning feel like a good convo — not a lecture.

          You’re here to help — be confident, a little quirky, and always explain things in a fun, digestible way.
`
        }
      ],
    },
    // @ts-expect-error
    clientMessages: [],
    // @ts-expect-error
    serverMessages: [],
  };
  return vapiAssistant;
};