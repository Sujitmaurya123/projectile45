"use client"
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { MessageCircle, X } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

// Define the type for a FAQ object
interface Faq {
    question: string;
    answer: string;
}

export default function FaqChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [faqs, setFaqs] = useState<Faq[]>([]); // Use the Faq type here
    const [userInput, setUserInput] = useState("");
    const [chatHistory, setChatHistory] = useState<{ user: string; bot: string }[]>([]);
    const sidebarRef = useRef<HTMLDivElement>(null); // Reference for the sidebar
    // Fetch FAQs from API
    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                const response = await axios.get("/api/faqs");
                setFaqs(response.data);
            } catch (error) {
                console.error("Error fetching FAQs:", error);
            }
        };
        fetchFaqs();
    }, []);
    // Close sidebar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Toggle chat sidebar
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    // Handle FAQ click
    const handleQuestionClick = (question: string) => {
        const faq = faqs.find((f: { question: string }) => f.question === question);
        if (faq) {
            setChatHistory((prev) => [...prev, { user: question, bot: faq.answer }]);
        }
    };

    // Handle user input
    const handleUserInput = () => {
        if (!userInput.trim()) return;
        const faq = faqs.find((f: { question: string }) =>
            f.question.toLowerCase().includes(userInput.toLowerCase())
        );
        const botResponse = faq ? faq.answer : "Sorry, I couldn't find an answer to that.";
        setChatHistory((prev) => [...prev, { user: userInput, bot: botResponse }]);
        setUserInput("");
    };

    // Handle clear chat button click
    const handleClearChat = () => {
        setChatHistory([]);
    };

    return (
        <>
            {/* Floating Chat Button */}
            <div
                className="fixed bottom-6 right-6 p-4 bg-blue-600 text-white rounded-full shadow-lg cursor-pointer transition-transform hover:scale-110"
                onClick={toggleSidebar}
            >
                <MessageCircle size={24} />
            </div>

            {/* Chat Sidebar */}
            <div
                className={`fixed top-[120px] z-10 bottom-6 overflow-x-auto right-0 h-80% w-[350px] md:w-[400px] bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300`}
                ref={sidebarRef} // Assign the ref to the sidebar div
            >
                <div className="p-4 flex flex-col max-h-4xl">
                    {/* Header */}
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold">FAQ Chat</h2>
                        
                        
                        <Button className="text-gray-800 bg-red-500" onClick={toggleSidebar}>
                            <X size={24} />
                        </Button>
                    </div>

                    {/* Chat History */}
                    <div className="flex-grow overflow-y-auto mt-4 space-y-3 border p-3 rounded-md h-60">
                        {chatHistory.length > 0 ? (
                            chatHistory.map((msg, index) => (
                                <div key={index}>
                                    <p className="text-blue-600 font-semibold">You: {msg.user}</p>
                                    <p className="text-gray-700">Bot: {msg.bot}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-400">Ask a question to get started!</p>
                        )}
                    </div>
                        <div className="flex  flex-row-reverse">
                        {/* Clear Chat Button */}

                        <Button
                            onClick={handleClearChat}
                            className="w-20px bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
                        >
                            Clear Chat
                        </Button>
                        </div>

                    {/* FAQ Quick Questions */}
                    <div className="mt-4">
                        <h3 className="font-semibold">Common Questions:</h3>
                        <div className="space-y-2 mt-2 overflow-y-auto ">
                            {faqs.slice(0, 3).map((faq: { question: string }, index) => (
                                <Button
                                    key={index}
                                    onClick={() => handleQuestionClick(faq.question)}
                                    className="block  bg-gray-100 hover:bg-gray-200  p-2 rounded-md w-full text-left text-sm transition"
                                >
                                    {faq.question}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* User Input Field */}
                    <div className="mt-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                        <Input
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            placeholder="Type your question..."
                            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                        />
                        <Button
                            onClick={handleUserInput}
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                        >
                            Send
                        </Button>
                    </div>

                    
                </div>
            </div>
        </>
    );
}
