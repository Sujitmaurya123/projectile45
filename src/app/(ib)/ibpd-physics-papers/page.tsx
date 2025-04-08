
"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const subjectsList = [
     'Physics higher level paper 1A specimen question paper' ,
     'Physics higher level paper 1A specimen markscheme' ,
     'Physics higher level paper 1B specimen question paper ' ,
     'Physics higher level paper 1B specimen markscheme ' ,
     'Physics higher level paper 2 specimen question paper ' ,
     'Physics higher level paper 2 specimen markscheme ' ,
     'Physics standard level paper 1A specimen question paper ' ,
     'Physics standard level paper 1A specimen markscheme' ,
     'Physics standard level paper 1B specimen question paper ' ,
     'Physics standard level paper 1B specimen markscheme' ,
     'Physics standard level paper 2 specimen question paper ' ,
     'Physics standard level paper 2 specimen markscheme' ,
];

export default function SendMailForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        subjects: subjectsList.reduce((acc, subject) => {
            acc[subject] = false;
            return acc;
        }, {} as Record<string, boolean>)
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
                [subject]: !prev.subjects[subject]
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

        // Replace with actual email sending logic
        console.log('Sending email with data:', payload);
    };

    return (
        <div className="max-w-5xl mx-auto py-12 px-4 md:px-8">
            <section className="mb-10 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-headingcol mb-2">Physics Higher and Standard level</h1>
                <p className="text-xl md:text-2xl font-semibold text-headingcol">(Higher Level and Standard Level)</p>
                <p className="text-2xl font-bold text-headingcol mt-2">Specimen Papers 1, 2 and 3</p>
                <p className="text-lg text-muted-foreground">First Examinations in 2021</p>
            </section>

            <div className="bg-white dark:bg-muted rounded-2xl shadow-xl p-8 md:p-10 max-w-3xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div className="space-y-2">
                        <Label htmlFor="name" className="text-base font-medium">Name</Label>
                        <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-base font-medium">Email (Gmail)</Label>
                        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                    </div>

                    {/* Mobile */}
                    <div className="space-y-2">
                        <Label htmlFor="mobile" className="text-base font-medium">Mobile Number</Label>
                        <Input id="mobile" name="mobile" type="tel" value={formData.mobile} onChange={handleChange} required />
                    </div>

                    {/* Subjects */}
                    <div className="space-y-4">
                        <Label className="block text-base font-medium">Select Papers</Label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {subjectsList.map((subject, index) => (
                                <div key={index} className="flex items-start gap-3 p-3 border rounded-xl bg-gray-50 dark:bg-muted/50 hover:shadow-sm transition">
                                    <Checkbox
                                        id={`subject-${index}`}
                                        checked={formData.subjects[subject]}
                                        onCheckedChange={() => handleCheckboxChange(subject)}
                                    />
                                    <Label htmlFor={`subject-${index}`} className="text-sm leading-tight">{subject}</Label>
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
