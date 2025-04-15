'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { toast } from "react-hot-toast";

export default function SendMailForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        subjects: {
            math: false,
            // physics,
        },
    });

    const [isSending, setIsSending] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (subject: string) => {
        setFormData(prev => ({
            ...prev,
            subjects: {
                ...prev.subjects,
                [subject]: !prev.subjects[subject as keyof typeof prev.subjects],
            },
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);

        const selectedSubjects = Object.entries(formData.subjects)
            .filter(([, checked]) => checked)
            .map(([subject]) => subject);

        const payload = {
            name: formData.name,
            email: formData.email,
            mobile: formData.mobile,
            subjects: selectedSubjects,
        };

        try {
            const res = await fetch('/api/send-mail-sat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error('Failed to send email');
           toast.success('Email sent successfully! Check your inbox.');

            // Reset form
            setFormData({
                name: '',
                email: '',
                mobile: '',
                subjects: { math: false },
            });
        } catch (error) {
            console.error(error);
            toast.error('Failed to send email. Please try again.');
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-4">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">
                Get a free SAT sample paper — enter your info below!
            </h1>

            <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-xl space-y-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <Label htmlFor="email">Gmail</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <Label htmlFor="mobile">Mobile Number</Label>
                        <Input
                            id="mobile"
                            name="mobile"
                            type="tel"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <Label className="block mb-2">Select Subject</Label>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="math"
                                    checked={formData.subjects.math}
                                    onCheckedChange={() => handleCheckboxChange('math')}
                                />
                                <Label htmlFor="math">SAT Maths (PPTX)</Label>
                            </div>
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
