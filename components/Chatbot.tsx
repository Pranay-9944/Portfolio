"use client";
import { useState, useRef, useEffect } from "react";

const GROQ_API_KEY = process.env.NEXT_PUBLIC_GROQ_API_KEY || "";

const SYSTEM_PROMPT = `You are a personal assistant on Pranay Wanjari's portfolio website.

ABOUT PRANAY:
- Full name: Pranay Wanjari
- Role: Java Backend Engineer / Full Stack Developer
- Based in India

SKILLS:
- Backend: Java (primary), Spring Boot, REST APIs
- Frontend: HTML, CSS, JavaScript, React
- Tools: Git, GitHub
- Specialty: Full Stack Java development

PROJECTS:
- Apna Tiffin: A tiffin/food delivery web application (his featured project)

CONTACT:
- Phone: 8888449229
- GitHub: https://github.com/Pranay-9944
- LinkedIn: https://www.linkedin.com/in/pranay-wanjari-788a74313/

STRICT RULES:
1. ONLY answer questions about Pranay Wanjari.
2. If asked ANYTHING else, say: "I can only answer questions about Pranay! Ask me about his skills, projects, or contact info."
3. Be warm, friendly, and professional.
4. Maximum 4 sentence only.  short. No more than 30 words, use some emoji.
5. If someone wants to hire Pranay, point them to his phone or LinkedIn.
6. NEVER repeat the same answer twice — vary your wording every time.
7. Talk like a human, not a robot. Be casual and friendly.`;

type Message = { text: string; isUser: boolean };
type HistoryItem = { role: string; parts: { text: string }[] };

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi! I'm Pranay's assistant 👋 Ask me about his skills, projects, or how to hire him!", isUser: false },
  ]);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;
    setInput("");
    setMessages((prev) => [...prev, { text, isUser: true }]);
    setLoading(true);

    const newHistory = [...history, { role: "user", parts: [{ text }] }];

    try {
      const res = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${GROQ_API_KEY}`,
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
              { role: "system", content: SYSTEM_PROMPT },
              ...newHistory.map((h) => ({
                role: h.role === "model" ? "assistant" : h.role,
                content: h.parts[0].text,
              })),
            ],
            max_tokens: 60,
            temperature: 1.0,
          }),
        }
      );
      const data = await res.json();
      const reply = data?.choices?.[0]?.message?.content || "Sorry, I couldn't respond right now!";
      setHistory([...newHistory, { role: "model", parts: [{ text: reply }] }]);
      setMessages((prev) => [...prev, { text: reply, isUser: false }]);
    } catch {
      setMessages((prev) => [...prev, { text: "Connection error. Please try again.", isUser: false }]);
    } finally {
      setLoading(false);
    }
  };

  const quickQuestions = ["About Pranay", "His skills", "Projects", "Contact / Hire"];

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-[999] w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/40 transition-all duration-200 hover:scale-110"
        aria-label="Open chat"
      >
        {open ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4a2 2 0 00-2 2v18l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2z" />
          </svg>
        )}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 h-[500px] flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-gray-700 bg-gray-900">
          <div className="flex items-center gap-3 px-4 py-3 bg-gray-800 border-b border-gray-700">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold text-sm">
              PW
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Pranay&apos;s Assistant</p>
              <p className="text-gray-400 text-xs">Java Backend Engineer</p>
            </div>
            <div className="ml-auto w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_6px_#4ade80]" />
          </div>

          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-gray-900">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.isUser
                      ? "bg-blue-600 text-white rounded-br-sm"
                      : "bg-gray-800 text-gray-100 border border-gray-700 rounded-bl-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-800 border border-gray-700 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5">
                  {[0, 150, 300].map((delay, i) => (
                    <span
                      key={i}
                      className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"
                      style={{ animationDelay: `${delay}ms` }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex flex-wrap gap-1.5 px-3 py-2 bg-gray-900 border-t border-gray-800">
            {quickQuestions.map((q) => (
              <button
                key={q}
                onClick={() => sendMessage(q)}
                className="text-xs px-3 py-1.5 rounded-full border border-gray-600 text-gray-400 hover:border-blue-500 hover:text-blue-400 transition-colors bg-gray-800"
              >
                {q}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 px-3 py-3 bg-gray-800 border-t border-gray-700">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
              placeholder="Ask about Pranay..."
              className="flex-1 bg-gray-900 border border-gray-600 rounded-xl px-4 py-2 text-sm text-white placeholder-gray-500 outline-none focus:border-blue-500 transition-colors"
            />
            <button
              onClick={() => sendMessage(input)}
              className="w-9 h-9 rounded-xl bg-blue-600 hover:bg-blue-500 flex items-center justify-center transition-colors flex-shrink-0"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}