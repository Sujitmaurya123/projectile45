"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
const pricingData = {
    India: {
        currency: "INR",
        IGCSE: { original: 4499, discounted: 3099 },
        "IB MYP": { original: 4499, discounted: 3099 },
        "IB DP": { original: 6599, discounted: 4599 },
        SAT: { original: 7849, discounted: 5499 },
        GRE: { original: 9199, discounted: 6399 },
        GMAT: { original: 10499, discounted: 7299 },
    },
    UK: {
        currency: "GBP",
        IGCSE: { original: 50, discounted: 35 },
        "IB MYP": { original: 50, discounted: 35 },
        "IB DP": { original: 74, discounted: 52 },
        SAT: { original: 84, discounted: 59 },
        GRE: { original: 98, discounted: 69 },
        GMAT: { original: 112, discounted: 79 },
    },
    UAE: {
        currency: "AED",
        IGCSE: { original: 227, discounted: 159 },
        "IB MYP": { original: 227, discounted: 159 },
        "IB DP": { original: 337, discounted: 239 },
        SAT: { original: 382, discounted: 269 },
        GRE: { original: 441, discounted: 309 },
        GMAT: { original: 511, discounted: 359 },
    },
} as const;

type CountryKey = keyof typeof pricingData;
type CourseKey = Exclude<keyof (typeof pricingData)["India"], "currency">;

export default function CoachingPage() {
    const [showPricing, setShowPricing] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        whatsapp: "",
        country: "", // will fill after detection
    });
    const [, setLoadingCountry] = useState(true); // loader flag
    const [loading, setLoading] = useState(false);

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        if (form.name && form.email && form.whatsapp) {
           

            try {
                const res = await fetch("/api/feesseenusers", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form), // sends name, email, whatsapp, and country
                });

                if (!res.ok) {
                    throw new Error("Failed to submit form");
                }
                if (res.ok) {
                    toast.success("Submitted successfully!");
                    setShowPricing(true);
                } else {
                    const error = await res.json();
                    toast.error(`Submission failed: ${error.message}`);
                }

                console.log("Form submitted successfully");
            } catch (error) {
                toast.error("Something went wrong. Try again later.");
                console.error(error);
            } finally {
                setLoading(false);
            }

        }
    };

    // Detect country based on IP address
    useEffect(() => {
        fetch("https://ipapi.co/json/")
            .then((res) => res.json())
            .then((data) => {
                const countryCodeMap: Record<string, CountryKey> = {
                    IN: "India",
                    GB: "UK",
                    AE: "UAE",
                };
                const detected = countryCodeMap[data.country_code as keyof typeof countryCodeMap] || "India";
                setForm((prev) => ({ ...prev, country: detected }));
            })
            .catch(() => {
                console.log("Error fetching location. Using default: India");
            })
            .finally(() => {
                setLoadingCountry(false); // done loading
            });
    }, []);

    const pricing = pricingData[form.country as CountryKey];

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-4xl font-bold mb-6 text-center text-headingcol">
                Why Our Sessions Are Worth It
            </h1>

            <div className="grid gap-4">
                {[
                    "1:1 Personalized Learning — Every session is tailored to your pace and goals.",
                    "Master Complex Concepts — We simplify tough topics using stories and real-world connections.",
                    "Exam-Style Preparation — Timed questions, past papers, and practice from basics to advanced.",
                    "Structured Practice & Feedback — Homework, quizzes after every session to ensure progress.",
                    "Dedicated WhatsApp Doubt Group — Private 1:1 group for instant doubt resolution.",
                    "Top-Quality Educators — From IITs, IIMs, and top global universities.",
                ].map((item, i) => (
                    <Card key={i}>
                        <CardContent className="p-4 text-base font-medium">{item}</CardContent>
                    </Card>
                ))}
            </div>

            {!showPricing && (
                <form
                    onSubmit={handleSubmit}
                    className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-2xl shadow-lg space-y-6"
                >
                    <div className="flex flex-col space-y-2">
                        <Label htmlFor="name" className="text-lg font-medium text-gray-700">
                            Name
                        </Label>
                        <Input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                        />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <Label htmlFor="email" className="text-lg font-medium text-gray-700">
                            Email
                        </Label>
                        <Input
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                        />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <Label htmlFor="whatsapp" className="text-lg font-medium text-gray-700">
                            WhatsApp
                        </Label>
                        <Input
                            name="whatsapp"
                            value={form.whatsapp}
                            onChange={handleChange}
                            required
                            className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                        />
                    </div>

                    {/* Show detected country */}
                   

                    <div className="text-center">
                        <Button
                            type="submit"
                            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold transition-shadow shadow-md hover:shadow-lg"
                            disabled={loading}
                        >
                            {loading ? "Submitting..." : "Unlock Pricing"}
                        </Button>
                    </div>
                </form>
            )}

            {showPricing && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-10"
                >
                    <h2 className="text-2xl font-semibold mb-4 text-center">
                        1:1 Coaching Fees ({pricing.currency}/hour)
                    </h2>
                    <table className="w-full mt-4 border-collapse border border-gray-300 dark:border-gray-700">
                        <thead>
                            <tr className="bg-green-400 text-gray-700">
                                <th className="p-3 border">Course</th>
                                <th className="p-3 border">Original Price ({pricing.currency}/hour)</th>
                                <th className="p-3 border">Discounted Price ({pricing.currency}/hour)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(pricing)
                                .filter((course) => course !== "currency")
                                .map((course) => {
                                    const courseKey = course as CourseKey;
                                    return (
                                        <tr key={courseKey} className="text-center">
                                            <td className="p-3 border">{courseKey}</td>
                                            <td className="p-3 border text-red-800">
                                                <del>
                                                    {pricing.currency} {pricing[courseKey].original}
                                                </del>
                                            </td>
                                            <td className="p-3 border text-black font-semibold">
                                                {pricing.currency} {pricing[courseKey].discounted}
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </motion.div>
            )}
        </div>
    );
}
