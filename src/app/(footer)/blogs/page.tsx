"use client"

import { FC, useState } from 'react';


// Define a BlogPost type
interface BlogPost {
    title: string;
    date: string;
    excerpt: string;
    slug: string;
}


const BlogPage: FC = () => {
    // Sample blog posts (you can replace it with data fetched from an API or CMS)
    const blogPosts: BlogPost[] = [
        {
            title: 'The Ultimate SAT Study Plan: When and How to Start Preparing for the Digital SAT',
            date: 'January 20, 2025',
            excerpt: 'Preparing for the Digital SAT (DSAT) is no longer just about memorizing formulas and vocabulary—it requires a well-structured study plan, time management strategies, and adaptive test-taking techniques. The DSAT is shorter, adaptive, and taken on a computer, making it essential for students to prepare strategically...',
            slug: '/blogs/the-ultimate-sat-study-plan',
        },
        {
            title: 'GMAT vs. GRE: Which Exam is Right for You?',
            date: 'January 20, 2025',
            excerpt: 'Choosing between the GMAT (Graduate Management Admission Test) and the GRE (Graduate Record Examination) is a crucial decision for students aspiring for an MBA or other graduate programs. Both exams are widely accepted, but they differ significantly in structure, scoring, and focus areas...',
            slug: '/blogs/gmat-vs-gre-exam',
        },
        {
            title: '5 Common SAT Prep Mistakes and How to Avoid Them',
            date: 'January 20, 2025',
            excerpt: "The Digital SAT (DSAT) is a significant milestone for students aspiring to study in top U.S. and international universities. However, many test-takers make avoidable mistakes that hinder their SAT score improvement. A well-planned approach, along with structured SAT prep courses, can make a huge difference in achieving a high SAT score...",
            slug: '/blogs/5-common-sat-prep-mistakes',
        },
        {
            title: 'How to Balance Work and GMAT Preparation Effectively',
            date: 'January 20, 2025',
            excerpt: 'Preparing for the GMAT while working full-time can feel overwhelming. Between job responsibilities, deadlines, and personal commitments, finding time for consistent GMAT study sessions is challenging. However, with smart time management, efficient study strategies, and expert guidance, you can achieve your target GMAT score without compromising your career...',
            slug: '/blogs/how-to-balance-work-and-gmat-prep',
        },
        {
            title: 'Step-by-Step Guide to Cracking the Executive Assessment (EA) for Business Professionals',
            date: 'January 20, 2025',
            excerpt: 'The Executive Assessment (EA) is a crucial exam for experienced professionals looking to secure admission into executive MBA programs. Designed to test critical thinking, problem-solving, and data analysis skills, the EA consists of three main sections: Integrated Reasoning (IR), Verbal Reasoning, and Quantitative Reasoning. Balancing a full-time job while preparing for the EA can be challenging, but with a structured study plan and smart strategies, you can achieve success...',
            slug: '/blogs/step-by-step-guide-cracking-ea',
        },
        {
            title: 'How to Choose the Best SAT/GMAT Prep Books for High Scores',
            date: 'January 20, 2025',
            excerpt: "Achieving a high score on the SAT or GMAT starts with choosing the right prep books. With so many options available, it's essential to select study guides that match your skill level, offer realistic practice tests, and provide effective strategies.Whether you’re a beginner or an advanced test- taker, this guide will help you find the best SAT and GMAT prep books to maximize your score...",
            slug: '/blogs/how-to-choose-best-sat-gmat-prep-books',
        },
        {
            title: 'Step-by-Step Guide to Managing Exam Stress and Boosting Confidence',
            date: 'January 20, 2025',
            excerpt: "Feeling anxious before an exam is completely normal, but excessive test anxiety can negatively impact your performance. Whether you're preparing for the SAT, GMAT, or any other standardized test, staying calm and focused is essential. This guide will show you effective study habits to boost confidence for exams and stress-relief techniques for exam day to help you perform at your best...",
            slug: '/blogs/steo-by-step-guide-managing-exam-stress',
        },
        {
            title: 'Top 5 Strategies for SAT/GMAT Preparation: A Step-by-Step Guide',
            date: 'January 20, 2025',
            excerpt: "Preparing for standardized tests like the SAT and GMAT can be challenging, but with the right approach, you can boost your confidence and maximize your scores. Whether you're aiming for a high SAT math score or looking to improve your GMAT verbal skills, the key lies in effective study habits, strategic test-taking, and smart time management...",
            slug: '/blogs/top-5-strategies-for-sat-gmat-prep',
        },
        {
            title: 'Mastering Data Insights on the GMAT: Strategies for High Scores',
            date: 'January 20, 2025',
            excerpt: 'Preparing for the GMAT Focus Edition? If so, one of the most crucial sections to master is Data Insights (DI). This section evaluates your ability to analyze complex data, interpret graphical information, and make data-driven decisions under time constraints. Success in the GMAT Data Insights section requires not only strong mathematical and logical reasoning skills but also effective time management strategies...',
            slug: '/blogs/mastering-data-insights-gmat',
        },
        {
            title: 'EA vs. GMAT: Which Test Is Right for Your MBA Journey?',
            date: 'January 20, 2025',
            excerpt: 'If you’re planning to pursue an MBA or Executive MBA (EMBA), one of the first decisions you’ll face is choosing between the GMAT Focus Edition and the Executive Assessment (EA). While both tests assess critical thinking, problem-solving, and data analysis skills, they cater to different types of applicants. Understanding their differences will help you make an informed decision and maximize your chances of admission...',
            slug: '/blogs/ea-vs-gmat-which-test-right-your-mba-journey',
        },
        {
            title: 'Mastering the Digital SAT Reading & Writing Section: Strategies for a High Score',
            date: 'January 20, 2025',
            excerpt: 'The Digital SAT Reading & Writing (RW) section has undergone significant changes, making it more streamlined, adaptive, and skill-focused. With 54 questions to be completed in 64 minutes, students must navigate reading comprehension, grammar, and logical reasoning questions efficiently. A strong SAT score can significantly boost your college applications, so mastering this section is essential...',
            slug: '/blogs/mastering-the-digital-sat-reading-writing',
        },
        {
            title: 'Top 10 Study Hacks for Digital SAT Success',
            date: 'February 25, 2025',
            excerpt: 'Preparing for the Digital SAT requires a strategic study plan tailored to the new format. With its adaptive testing system, shorter duration (2 hours and 14 minutes), and online interface, students must adopt smarter preparation methods. Here are the top 10 study hacks to help you excel on the Digital SAT and achieve your dream score...',
            slug: '/blogs/top-10-study-hacks-sat',
        },
        {
            title: 'Mastering the GMAT Focus Edition: A Strategic Study Plan for Success',
            date: 'January 20, 2025',
            excerpt: 'The GMAT Focus Edition presents a streamlined, adaptive format designed to assess problem-solving, critical reasoning, and data analysis skills efficiently. With its shorter duration and refined question sets, preparing effectively is crucial for achieving a high score. This guide outlines a structured GMAT study schedule, incorporating best practices, expert strategies, and essential resources to help you excel...',
            slug: '/blogs/mastering-the-gmat-focus-edition',
        },
        {
            title: 'EA vs. GMAT: Which Test is Right for Your MBA Journey?',
            date: 'January 20, 2025',
            excerpt: "Deciding between the Executive Assessment (EA) and the GMAT can be challenging, especially if you're planning to apply for an MBA program.Both exams assess business school readiness, but they cater to different applicants.This guide will help you understand their similarities, differences, and which one aligns best with your career goals...",
            slug: '/blogs/ea-vs-gmat-test-right-your-mba-journey',
        },
        {
            title: 'Smart Guessing Strategies for Quantitative Reasoning MCQs',
            date: 'January 20, 2025',
            excerpt: "Preparing for a standardized test like the GMAT, GRE, or SAT? At some point, you'll face a tricky quantitative reasoning question that leaves you stumped. Instead of leaving it blank, use smart guessing strategies to improve your chances of selecting the correct answer. While guessing isn't a substitute for preparation, strategic elimination and logical reasoning can significantly boost your score. Here’s how you can make educated guesses on multiple-choice questions (MCQs)...",
            slug: '/blogs/smart-guessing-strategies-quantitative-reasoning-mcqs',
        },
        {
            title: 'Mastering SAT Writing: Essential Grammar Rules for a High Score',
            date: 'January 20, 2025',
            excerpt: "Achieving a top score in the SAT Writing section requires a strong grasp of English grammar. This section tests your ability to identify and correct grammatical errors in a passage, making it crucial to understand key grammar rules. Here are the fundamental concepts you must master to excel in SAT Writing...",
            slug: '/blogs/mastering-sat-writing-essential-grammar-rules',
        },
        // {
        //     title: 'Mastering GMAT Critical Reasoning: Proven Strategies for Success',
        //     date: 'January 20, 2025',
        //     excerpt: "The GMAT Critical Reasoning section is designed to assess your ability to analyze arguments, evaluate logical structures, and identify assumptions. Many test-takers find this section challenging, but with the right approach, you can improve your accuracy and confidence.If you're preparing for the GMAT, especially with the support of expert coaching like Projectile 45 Tuition, these strategies will help you tackle even the trickiest questions efficiently...",
        //     slug: '/blogs/mastering-gmat-critical-reasoning',
        // },
        // {
        //     title: 'Mastering Effective Skimming Techniques for Long Passages',
        //     date: 'January 20, 2025',
        //     excerpt: "When tackling long reading passages, especially on exams like the GMAT, GRE, or SAT, time is your biggest challenge. Skimming techniques help you efficiently extract important information, enabling you to answer questions with both speed and accuracy.At Projetile 45 Tuition, we emphasize strategic reading methods that enhance comprehension while optimizing reading speed.In this article, we’ll explore the most effective skimming strategies that will improve your reading efficiency and exam performance...",
        //     slug: '/blogs/mastering-effective-skimming-techniques',
        // },
        // {
        //     title: 'Mastering Difficult Questions: Strategies to Save Time and Boost Accuracy',
        //     date: 'January 20, 2025',
        //     excerpt: "Facing tough questions during exams or interviews can feel overwhelming, especially when working under strict time constraints. Whether you're tackling standardized tests like the GMAT, GRE, or SAT, or navigating tricky job interview questions, having a structured approach can make all the difference. In this article, we’ll explore proven strategies to help you confidently manage challenging questions without wasting precious time. Plus, we'll show you how Projetile 45 Tuition can enhance your test-taking skills with expert guidance...",
        //     slug: '/blogs/mastering-difficult-question-save-time',
        // },
        // {
        //     title: 'Maximize Your Success: What to Do One Day Before the Exam',
        //     date: 'January 20, 2025',
        //     excerpt: "The day before an exam is your final opportunity to solidify key concepts, relax your mind, and prepare your body for optimal performance. Many students make the mistake of last-minute cramming, which can increase stress and hinder memory retention. Instead, focus on strategic revision, relaxation, and proper self-care to ensure that you walk into the exam hall feeling confident and prepared...",
        //     slug: '/blogs/maximize-your-success-what-do-one-day-before-exam',
        // },
        // {
        //     title: 'Boost Your SAT Score by 200 Points in 30 Days: A Strategic Study Plan',
        //     date: 'January 20, 2025',
        //     excerpt: "Improving your SAT score by 200 points in just 30 days may seem challenging, but with a structured and focused study plan, it is entirely achievable. The key lies in efficient time management, targeted practice, and strategic test-taking techniques. Whether you’re aiming to improve your math problem-solving skills, reading comprehension, or grammar proficiency, this 30-day plan will set you on the right path...",
        //     slug: '/blogs/boost-your-sat-score-by-200-points-30-days',
        // },
        // {
        //     title: 'The 80/20 Rule for GMAT Focus Edition: Study Smart, Score High',
        //     date: 'January 20, 2025',
        //     excerpt: "Preparing for the GMAT Focus Edition can be daunting, but what if you could maximize your score with less effort? The Pareto Principle, or the 80/20 Rule, suggests that 80% of your results come from 20% of your efforts. By strategically focusing on high-yield topics and efficient study methods, you can significantly improve your GMAT score without wasting time on low-impact areas...",
        //     slug: '/blogs/the-80-20-rule-for-gmat-focus-edition',
        // },
        // {
        //     title: '5 Steps to Boost Your Quantitative Skills in the Executive Assessment (EA)',
        //     date: 'January 20, 2025',
        //     excerpt: "The Executive Assessment (EA) is designed for busy professionals looking to enhance their business school applications. Unlike other standardized tests, the EA focuses on problem-solving and data sufficiency rather than advanced math concepts. To maximize your EA Quant score efficiently, you need a strategic approach. Here are five expert-backed steps to improve your EA quantitative skills...",
        //     slug: '/blogs/5-steps-boost-your-quantitative-skills-EA',
        // },
        // {
        //     title: 'How to Go from Average to a Perfect 1600 on the SAT',
        //     date: 'January 20, 2025',
        //     excerpt: "Achieving a perfect SAT score of 1600 might seem like a distant dream, but with the right strategy, discipline, and preparation, you can bridge the gap from an average score (1050-1150) to perfection. By following a structured approach, optimizing your weak areas, and practicing strategically, you can maximize your SAT score and secure admission to top universities...",
        //     slug: '/blogs/how-to-go-from-average-to-a-perfect-1600-on-the-sat',
        // },
        // {
        //     title: 'How to Avoid Common Pitfalls in GMAT Focus Edition – Data Insights Section',
        //     date: 'January 20, 2025',
        //     excerpt: "The Data Insights (DI) section in the GMAT Focus Edition is a game-changer! It assesses your ability to analyze data, recognize patterns, and draw logical conclusions—without relying on extensive calculations. However, many test-takers fall into common traps that cost them valuable points. Understanding these pitfalls and learning how to navigate them effectively can give you a significant edge in your GMAT preparation...",
        //     slug: '/blogs/how-to-avoid-common-pitfalls-in-gmat-focus-edition',
        // },
        
       
    ];

    // Define the number of posts per page
    const postsPerPage = 9;

    // State for the current page
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the index range for posts to display
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

    // Handle page change
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    // Calculate total pages
    const totalPages = Math.ceil(blogPosts.length / postsPerPage);


    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
          
           
            
            <h1 className="text-4xl font-bold text-center mb-8 text-headingcol">Blogs</h1>
        
            

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentPosts.map((post) => (
                    <div
                        key={post.slug}
                        className="border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <h2 className="text-2xl font-semibold text-headingcol">{post.title}</h2>
                        
                        <p className="mt-4 text-gray-700">{post.excerpt}</p>
                        <a
                            href={post.slug}
                            className="inline-block mt-4 text-indigo-600 hover:text-indigo-800"
                        >
                            Read more
                        </a>
                    </div>
                ))}
            </div>
            {/* Pagination controls */}
            <div className="flex justify-center mt-8">
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-l-lg"
                >
                    Prev
                </button>
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => paginate(index + 1)}
                        className={`px-4 py-2 ${currentPage === index + 1 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-indigo-500`}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-r-lg"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default BlogPage;
