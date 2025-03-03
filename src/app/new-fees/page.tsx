"use client"

import { useEffect, useState } from "react";

const pricingData = {
    India: {
        currency: "INR",
        IGCSE: { original: 4499, discounted: 3099 },
        "IB MYP": { original: 4499, discounted: 3099 },
        "IB DP": { original: 6599, discounted: 4599 },
        SAT: { original: 7849, discounted: 5499 },
        GRE: { original: 9199, discounted: 6399 },
        GMAT: { original: 10499, discounted: 7299 }
    },
    UK: {
        currency: "GBP",
        IGCSE: { original: 50, discounted: 35 },
        "IB MYP": { original: 50, discounted: 35 },
        "IB DP": { original: 74, discounted: 52 },
        SAT: { original: 84, discounted: 59 },
        GRE: { original: 98, discounted: 69 },
        GMAT: { original: 112, discounted: 79 }
    },
    UAE: {
        currency: "AED",
        IGCSE: { original: 227, discounted: 159 },
        "IB MYP": { original: 227, discounted: 159 },
        "IB DP": { original: 337, discounted: 239 },
        SAT: { original: 382, discounted: 269 },
        GRE: { original: 441, discounted: 309 },
        GMAT: { original: 511, discounted: 359 }
    }
} as const;

type CountryKey = keyof typeof pricingData;
type CourseKey = Exclude<keyof (typeof pricingData)["India"], "currency">;

export default function Home() {
    const [country, setCountry] = useState<CountryKey>("India"); // Default set to "India"
    const pricing = pricingData[country];

    useEffect(() => {
        // Fetching location based on IP address
        fetch("https://ipapi.co/json/")
            .then((res) => res.json())
            .then((data) => {
                // Ensure that data.country_code is one of the known country codes (IN, GB, AE)
                const countryCodeMap: Record<string, CountryKey> = {
                    "IN": "India",
                    "GB": "UK",
                    "AE": "UAE"
                };

                const detectedCountry = countryCodeMap[data.country_code as keyof typeof countryCodeMap] || "India"; // Default to India if not found
                setCountry(detectedCountry);
            })
            .catch(() => {
                console.log("Error fetching location. Using default: India");
            });
    }, []); // Dependency array ensures the effect runs only once when component mounts

    return (
        <main className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center p-6">
            
            <h1 className="text-3xl font-bold text-headingcol dark:text-white">
                Pricing
            </h1>

            <div className="w-full max-w-4xl mt-6">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 text-center">
                    Premium 1:1 Coaching Fees ({pricing.currency}/hour)
                </h2>
                <table className="w-full mt-4 border-collapse border border-gray-300 dark:border-gray-700">
                    <thead>
                        <tr className="bg-green-400 text-gray-700">
                            <th className="p-3 border border-gray-300 dark:border-gray-700">Course</th>
                            <th className="p-3 border border-gray-300 dark:border-gray-700">Original Price ({pricing.currency}/hour)</th>
                            <th className="p-3 border border-gray-300 dark:border-gray-700">Discounted Price ({pricing.currency}/hour)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(pricing)
                            .filter((course) => course !== "currency") // ✅ Exclude "currency"
                            .map((course) => {
                                const courseKey = course as CourseKey; // ✅ Type Assertion
                                return (
                                    <tr key={courseKey} className="text-center">
                                        <td className="p-3 border border-gray-300 dark:border-gray-700 ">{courseKey}</td>
                                        <td className="p-3 border border-gray-300 dark:border-gray-700 text-red-800">
                                            <del>{pricing.currency} {pricing[courseKey].original} </del>
                                        </td>
                                        <td className="p-3 border border-gray-300 dark:border-gray-700 text-black font-semibold">
                                            {pricing.currency} {pricing[courseKey].discounted}
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </main>
    );
}
