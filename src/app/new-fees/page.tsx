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
    const [country, setCountry] = useState<CountryKey>("UK"); // Default set to "UK"
    const pricing = pricingData[country];

    useEffect(() => {
        // Fetching location based on IP address
        fetch("https://ipapi.co/json/")
            .then((res) => res.json())
            .then((data) => {
                // Update country only if it's not already set
                // if (country === "UK") {
                //     let detectedCountry: CountryKey = "UK"; // Default to UK
                //     if (data.country_code === "IN") detectedCountry = "India";
                //     else if (data.country_code === "AE") detectedCountry = "UAE";

                //     setCountry(detectedCountry);
                // }
                
                if(data.country_code==="IN"){
                    setCountry("India");
                } else if (data.country_code === "UK"){
                    setCountry("UK");
                } else if (data.country_code === "AE") {
                    setCountry("UAE");
                }
            })
            .catch(() => {
                console.log("Error fetching location. Using default: UK");
            });
    }, []); // Dependency array ensures the effect runs only when country changes

    return (
        <main className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center p-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Pricing - <strong className="text-blue-600">{country}</strong>
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
