"use client"
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function SendMailForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        subjects: {
            math: false,
            // physics: false,
            // chemistry: false,
        }
    });

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
            }
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const selectedSubjects = Object.entries(formData.subjects)
            .filter(([, checked]) => checked)
            .map(([subject]) => subject);

        const payload = {
            ...formData,
            subjects: selectedSubjects
        };

        // Send mail logic goes here, for now log to console
        console.log('Sending email with data:', payload);
    };

    return (
        <div className="max-w-6xl mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4 text-headingcol">Get a free SAT sample paper—just enter your name, email, and mobile number to start practicing now!</h1>
            <div className="max-w-xl mx-auto p-4">

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <Label htmlFor="email">Email (Gmail)</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <Label htmlFor="mobile">Mobile Number</Label>
                    <Input id="mobile" name="mobile" type="tel" value={formData.mobile} onChange={handleChange} required />
                </div>

                <div>
                    <Label className="block mb-2">Subjects</Label>
                    <div className="space-y-2">
                        {['math'].map(subject => (
                            <div key={subject} className="flex items-center space-x-2">
                                <Checkbox id={subject} checked={formData.subjects[subject as keyof typeof formData.subjects]} onCheckedChange={() => handleCheckboxChange(subject)} />
                                <Label htmlFor={subject} className="capitalize">{subject}</Label>
                            </div>
                        ))}
                    </div>
                </div>

                <Button type="submit" className="w-full mt-4 text-lg py-6 hover:bg-blue-600">Send Email</Button>

            </form>
           </div>
        </div>
    );
}
