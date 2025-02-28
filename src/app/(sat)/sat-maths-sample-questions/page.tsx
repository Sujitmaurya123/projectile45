"use client"
import React, { useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const FileUpload: React.FC = () => {
    const [name, setName] = useState<string>("");
    const [mobile, setMobile] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string | null>(null);

    // Handle input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "name") setName(value);
        if (name === "mobile") setMobile(value);
        if (name === "email") setEmail(value);
    };

    // Handle form submit
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !mobile || !email) {
            setMessage("Please fill in all fields.");
            return;
        }

        setLoading(true);
        setMessage(null);

        // File link (stored in public folder)
        const fileLink = `${window.location.origin}/files/SAT_Maths_P45.pptx`;

        try {
            const result = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_IDPPTX!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_USERPPTX!,
                {
                    name,
                    mobile,
                    email,
                    fileLink, // Pass the file link to the email template
                },
                process.env.NEXT_PUBLIC_EMAILJS_USER_IDPPTX!
            );
            setMessage("Email sent successfully!");
            toast.success("Email sent successfully!")
            console.log(result);
        } catch (error) {
            setMessage("Failed to send email.");
            toast.error("Failed to send email.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl text-center font-semibold mb-4 text-headingcol">Get a free SAT Math sample paper—just enter your name, email, and mobile number to start practicing now!</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Input */}
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="block w-full p-2 border border-gray-300 rounded"
                />

                {/* Mobile Number Input */}
                <input
                    type="text"
                    name="mobile"
                    value={mobile}
                    onChange={handleInputChange}
                    placeholder="Your Mobile Number"
                    className="block w-full p-2 border border-gray-300 rounded"
                />

                {/* Email Input */}
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="block w-full p-2 border border-gray-300 rounded"
                />

                {/* Submit Button */}
                <button
                    type="submit"
                    className={`w-full py-2 bg-blue-500 text-white rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={loading}
                >
                    {loading ? "Sending..." : "Send Email"}
                </button>
            </form>

            {/* Message */}
            {message && (
                <div
                    className={`mt-4 text-center ${message === "Email sent successfully!" ? 'text-green-600' : 'text-red-600'}`}
                >
                    {message}
                </div>
            )}
        </div>
    );
};

export default FileUpload;
