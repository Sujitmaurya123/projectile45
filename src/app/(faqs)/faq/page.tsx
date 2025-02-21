"use client";

import { useEffect, useState } from "react";

interface FAQ {
    _id: string;
    question: string;
    answer: string;
}

export default function FAQ() {
    const [faqs, setFaqs] = useState<FAQ[]>([]);
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [loading, setLoading] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editQuestion, setEditQuestion] = useState("");
    const [editAnswer, setEditAnswer] = useState("");

    // 📌 Fetch FAQs from API
    useEffect(() => {
        async function fetchFaqs() {
            const response = await fetch("/api/faqs");
            if (!response.ok) return;
            const data = await response.json();
            setFaqs(data);
        }
        fetchFaqs();
    }, []);

    // 📌 Handle adding a new FAQ
    async function handleAddFAQ(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);

        const response = await fetch("/api/faqs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ question, answer }),
        });

        const data = await response.json();
        if (response.ok) {
            setFaqs([...faqs, data.faq]); // Add new FAQ to list
            setQuestion("");
            setAnswer("");
        }
        setLoading(false);
    }

    // 📌 Handle deleting an FAQ
    async function handleDelete(id: string) {
        if (!confirm("Are you sure you want to delete this FAQ?")) return;

        const response = await fetch(`/api/faqs/${id}`, { method: "DELETE" });

        if (response.ok) {
            setFaqs(faqs.filter((faq) => faq._id !== id));
        }
    }

    // 📌 Handle updating an FAQ
    async function handleUpdate(id: string) {
        const response = await fetch(`/api/faqs/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ question: editQuestion, answer: editAnswer }),
        });

        if (response.ok) {
            setFaqs(
                faqs.map((faq) =>
                    faq._id === id ? { ...faq, question: editQuestion, answer: editAnswer } : faq
                )
            );
            setEditingId(null);
        }
    }

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-4">FAQs</h1>
            {/* 📌 Form to add a new FAQ */}
            <form onSubmit={handleAddFAQ} className="space-y-4">
                <input
                    type="text"
                    placeholder="Enter question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
                <textarea
                    placeholder="Enter answer"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                ></textarea>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                    disabled={loading}
                >
                    {loading ? "Adding..." : "Add FAQ"}
                </button>
            </form>

            {/* 📌 FAQ List */}
            <div className="mt-6">
                <h3 className="text-center text-3xl font-medium">FAQs List </h3>
            <ul className="mt-6">
                {faqs.map((faq) => (
                    <li key={faq._id} className="border-b p-2 flex justify-between items-center">
                        {editingId === faq._id ? (
                            <div className="flex-1">
                                <input
                                    type="text"
                                    className="border p-1 w-full rounded"
                                    value={editQuestion}
                                    onChange={(e) => setEditQuestion(e.target.value)}
                                />
                                <textarea
                                    className="border p-1 w-full rounded mt-2"
                                    value={editAnswer}
                                    onChange={(e) => setEditAnswer(e.target.value)}
                                />
                                <div className="mt-2">
                                    <button
                                        onClick={() => handleUpdate(faq._id)}
                                        className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={() => setEditingId(null)}
                                        className="bg-gray-500 text-white px-3 py-1 rounded"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="flex-1">
                                <strong>{faq.question}</strong>
                                <p>{faq.answer}</p>
                            </div>
                        )}

                        {/* Edit & Delete Buttons */}
                        <div>
                            {editingId !== faq._id ? (
                                <>
                                    <button
                                        onClick={() => {
                                            setEditingId(faq._id);
                                            setEditQuestion(faq.question);
                                            setEditAnswer(faq.answer);
                                        }}
                                        className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(faq._id)}
                                        className="bg-red-500 text-white px-2 py-1 rounded"
                                    >
                                        Delete
                                    </button>
                                </>
                            ) : null}
                        </div>
                    </li>
                ))}
            </ul>

            </div>

           
        </div>
    );
}
