import React from "react";
import { Card, CardContent } from "@/components/ui/card";

import { ExternalLink } from "lucide-react";
import Link from "next/link";

const papers = [
    {
        title: "SAT",
        links: [
            { name: "SAT Maths", url: "sat-maths-sample-questions" },
        ],
    },
    {
        title: "IB",
        links: [
            { name: "IBDP- Maths - AA", url: "/ibdp-maths-analysis-approaches-papers" },
            { name: "IBDP - Maths - AI", url: "/ibdp-maths-applications-interpretation-papers" },
            { name: "IBDP - Physics", url: "/ibpd-physics-papers" },

        ],
    },
    {
        title: "IGCSE",
        links: [
            { name: "IGCSE Physics Questions Paper", url: "/igcse-physics-questions-paper" },
           
        ],
    },
];

const DownloadCardsPage: React.FC = () => {
    return (
        <div>
            <h2 className="text-4xl text-headingcol text-center mt-4 font-bold mb-4">
                Ace Your Exams – Start Practicing
            </h2>

            <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {papers.map((paper, index) => (
                    <Card key={index} className="rounded-2xl shadow-md p-4">
                        <CardContent>
                            <h2 className="text-xl font-semibold mb-4">{paper.title}</h2>
                            <div className=" flex flex-col gap-5">
                                {paper.links.map((link, idx) => (
                                    <Link href={link.url} key={idx} passHref className="text-blue-600 cursor-pointer flex gap-4">
                                   
                                            {link.name} <ExternalLink />
                                     
                                    </Link>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default DownloadCardsPage;
