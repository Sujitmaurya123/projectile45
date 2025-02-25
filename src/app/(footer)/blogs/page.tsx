import { FC } from 'react';

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
            title: 'Top 10 Study Hacks for Digital SAT Success',
            date: 'February 25, 2025',
            excerpt: 'Preparing for the Digital SAT requires a well-structured study plan, especially for students aiming for top scores. The new format, which features adaptive testing, a shorter duration (2 hours and 14 minutes), and computer-based testing, demands a unique approach. Here are the top 10 study hacks to help you ace the Digital SAT...',
            slug: '/blogs/top-10-study-hacks-sat',
        },
        {
            title: 'Crafting an Effective Study Schedule for the GMAT Focus Edition',
            date: 'February 15, 2025',
            excerpt: 'Preparing for the GMAT Focus Edition necessitates a strategic and well-structured study plan. This version of the GMAT features a shorter format, fewer questions, and excludes the Analytical Writing Assessment (AWA) section. To maximize your score, follow this comprehensive guide to develop an optimized GMAT study schedule...',
            slug: '/blogs/crafting-effective-study-schedule-gmat',
        },
        {
            title: 'The Ultimate SAT Preparation Timeline: When to Start Studying',
            date: 'January 20, 2025',
            excerpt: 'Preparing for the Digital SAT (DSAT) requires a well-structured study plan to maximize your score without last-minute stress. The DSAT is now adaptive, shorter (2 hours and 14 minutes), and taken on a computer, which demands a strategic approach. This guide provides a month-by-month SAT preparation timeline to help students optimize their study routine and achieve a high score...',
            slug: '/blogs/the-ultimate-sat-preparation',
        },
        {
            title: 'GMAT vs. GRE: Which Exam is Right for You?',
            date: 'January 20, 2025',
            excerpt: 'Deciding between the GMAT and the GRE is a pivotal step for prospective graduate students, especially those targeting MBA programs.Both exams are widely accepted, but they differ in structure, content, and focus.This guide aims to help students, particularly from India and the UAE, determine which test aligns best with their strengths and academic goals...',
            slug: '/blogs/gmat-vs-gre-exam',
        },
        {
            title: '5 Common SAT Prep Mistakes and How to Avoid Them',
            date: 'January 20, 2025',
            excerpt: "Preparing for the Digital SAT (DSAT) is a challenging yet rewarding process when approached strategically. Many students, however, make avoidable mistakes that negatively impact their scores. If you're aiming for a high SAT score, avoid these five common mistakes and use expert SAT prep resources like Projectile 45 online tuition for guided learning...",
            slug: '/blogs/5-common-sat-prep-mistakes',
        },
        {
            title: 'How to Balance Work and GMAT Preparation Effectively',
            date: 'January 20, 2025',
            excerpt: 'Preparing for the GMAT exam while working full-time can be overwhelming. However, with smart time management and the right strategies, you can achieve your target GMAT score without compromising your job performance. Here’s how to balance GMAT preparation and work effectively...',
            slug: '/blogs/how-to-balance-work-and-gmat-prep',
        },
        {
            title: 'Step-by-Step Guide to Cracking the Executive Assessment (EA) for Business Professionals',
            date: 'January 20, 2025',
            excerpt: 'The Executive Assessment (EA) is a key exam for experienced professionals seeking admission to executive MBA programs. With its emphasis on Integrated Reasoning (IR), Verbal Reasoning, and Quantitative Reasoning, the EA tests your critical thinking, problem-solving, and data analysis skills. Balancing work, life, and EA preparation can be challenging, but with the right strategy and structured study plan, you can ace the test...',
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
            excerpt: "Feeling anxious before an exam is completely normal, but excessive test anxiety can negatively impact your performance. Whether you're preparing for the SAT, GMAT, or any other standardized test, staying calm and focused is essential.This guide will show you effective study habits to boost confidence for exams and stress- relief techniques for exam day to help you perform at your best...",
            slug: '/blogs/steo-by-step-guide-managing-exam-stress',
        },
        {
            title: 'Top 5 Strategies for SAT/GMAT Preparation: A Step-by-Step Guide',
            date: 'January 20, 2025',
            excerpt: "Preparing for standardized tests like the SAT and GMAT can be challenging, but with the right approach, you can boost your confidence and maximize your scores. Whether you're aiming for a high SAT math score or looking to improve your GMAT verbal skills, the key lies in effective study habits, strategic test- taking, and smart time management...",
            slug: '/blogs/top-5-strategies-for-sat-gmat-prep',
        },
        {
            title: 'Time Management Tips for Digital SAT Math: How to Improve Speed & Accuracy',
            date: 'January 20, 2025',
            excerpt: 'The Digital SAT Math section presents a unique challenge, requiring efficient time management, strategic problem-solving, and smart calculator use. With 70 minutes to tackle 44 questions, you must optimize your approach to maximize your score...',
            slug: '/blogs/time-management-tips-digital-sat-math',
        },
        {
            title: 'Mastering Data Insights on the GMAT: Strategies for High Scores',
            date: 'January 20, 2025',
            excerpt: 'The GMAT Focus Edition places significant emphasis on data interpretation, logical reasoning, and pattern recognition. One of the most challenging sections is Data Insights (DI), which tests how well you can analyze graphs, tables, and multi-source data under strict time limits...',
            slug: '/blogs/mastering-data-insights-gmat',
        },
        {
            title: 'EA vs. GMAT: Which Test Is Right for Your MBA Journey?',
            date: 'January 20, 2025',
            excerpt: 'If you’re considering an MBA or Executive MBA (EMBA), you might be wondering: Should I take the GMAT or the Executive Assessment (EA)?Both exams assess business school readiness by evaluating critical thinking, analytical skills, and problem-solving abilities. However, they are designed for different types of applicants. Let’s break down the key similarities and differences to help you decide which test suits your career goals...',
            slug: '/blogs/ea-vs-gmat-which-test-right-your-mba-journey',
        },
        {
            title: 'Mastering the Digital SAT Reading & Writing Section: Tips, Strategies & Sample Questions',
            date: 'January 20, 2025',
            excerpt: 'The Digital SAT Reading & Writing (RW) section has undergone significant changes, making it shorter, adaptive, and more skill-focused. With 54 questions in 64 minutes, students must efficiently tackle reading comprehension, grammar, and logical reasoning questions...',
            slug: '/blogs/mastering-the-digital-sat-reading-writing',
        },
        // {
        //     title: 'Mastering Tailwind CSS',
        //     date: 'January 20, 2025',
        //     excerpt: 'Tailwind CSS is a utility-first framework that allows you to rapidly build custom UIs...',
        //     slug: '/blog/mastering-tailwind-css',
        // },
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-8 text-headingcol">Blogs</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
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
        </div>
    );
};

export default BlogPage;
