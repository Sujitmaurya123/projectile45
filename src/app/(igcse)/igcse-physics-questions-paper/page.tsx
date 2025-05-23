"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { toast } from "react-hot-toast";
const subjectsList = [
    "Physics: IGCSE Physics june-2023 markscheme paper-11",
    "Physics: IGCSE Physics june-2023 markscheme paper-21",
    "Physics: IGCSE Physics june-2023 markscheme paper-31",
    "Physics: IGCSE Physics june-2023 markscheme paper-41",
    "Physics: IGCSE Physics june-2023 markscheme paper-51",
    "Physics: IGCSE Physics june-2023 markscheme paper-61",
    "Physics: IGCSE Physics june-2023 specimen question paper-1",
    "Physics: IGCSE Physics june-2023 specimen question paper-2",
    "Physics: IGCSE Physics june-2023 specimen question paper-3",
    "Physics: IGCSE Physics june-2023 specimen question paper-4",
    "Physics: IGCSE Physics june-2023 specimen question paper-5",
    "Physics: IGCSE Physics june-2023 specimen question paper-6",
];

export default function SendMailForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        subjects: subjectsList.reduce((acc, subject) => {
            acc[subject] = false;
            return acc;
        }, {} as Record<string, boolean>),
    });
    const [isSending, setIsSending] = useState(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (subject: string) => {
        setFormData((prev) => ({
            ...prev,
            subjects: {
                ...prev.subjects,
                [subject]: !prev.subjects[subject],
            },
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);
        // Filter out selected subjects
        const selectedSubjects = Object.entries(formData.subjects)
            .filter(([, checked]) => checked)
            .map(([subject]) => subject);

        const payload = {
            ...formData,
            subjects: selectedSubjects,
        };

        try {
            // Send form data to the API route
            const response = await fetch("/api/physics-send-mail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                toast.success("Email sent successfully!");
                setFormData({
                    name: "",
                    email: "",
                    mobile: "",
                    subjects: subjectsList.reduce((acc, subject) => {
                        acc[subject] = false;
                        return acc;
                    }, {} as Record<string, boolean>),
                });
            } else {
                toast.error("Error sending email.");
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("Error sending email.");
        }finally{
            setIsSending(false);
        }
    };

    return (
        <div className="max-w-5xl mx-auto py-12 px-4 md:px-8">
            <section className="mb-10 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-headingcol mb-2">
                    IGCSE Physics Question Papers
                </h1>
            </section>

            <div className="bg-white dark:bg-muted rounded-2xl shadow-xl p-8 md:p-10 max-w-3xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div className="space-y-2">
                        <Label htmlFor="name" className="text-base font-medium">
                            Name
                        </Label>
                        <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-base font-medium">
                            Email (Gmail)
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Mobile */}
                    <div className="space-y-2">
                        <Label htmlFor="mobile" className="text-base font-medium">
                            Mobile Number
                        </Label>
                        <Input
                            id="mobile"
                            name="mobile"
                            type="tel"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Subjects */}
                    <div className="space-y-4">
                        <Label className="block text-base font-medium">Select Papers</Label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {subjectsList.map((subject, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 p-3 border rounded-xl bg-gray-50 dark:bg-muted/50 hover:shadow-sm transition"
                                >
                                    <Checkbox
                                        id={`subject-${index}`}
                                        checked={formData.subjects[subject]}
                                        onCheckedChange={() => handleCheckboxChange(subject)}
                                    />
                                    <Label htmlFor={`subject-${index}`} className="text-sm leading-tight">
                                        {subject}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Button
                        type="submit"
                        className="w-full mt-4 text-lg py-6 hover:bg-blue-600"
                        disabled={isSending}
                    >
                        {isSending ? 'Sending...' : 'Send Email'}
                    </Button>
                </form>
            </div>
        </div>
    );
}
