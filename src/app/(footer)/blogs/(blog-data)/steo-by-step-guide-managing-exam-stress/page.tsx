// components/BlogPost.tsx
import React from 'react';

const BlogPost: React.FC = () => {
    return (
        <div className="max-w-6xl mx-auto p-6  mt-8">
            <h1 className="text-4xl font-extrabold text-center text-headingcol mb-6">
                Step-by-Step Guide to Managing Exam Stress and Boosting Confidence
            </h1>

            <section className='text-gray-800'>
                <h2 className="text-2xl font-semibold text-headingcol mt-4">Step 1: Start Preparing Early and Stay Consistent</h2>
                <p className="mt-2 text-lg">
                    One of the best ways to overcome fear of exams and improve performance is to begin studying early. Cramming at the last minute increases stress and lowers retention.
                </p>
                <ul className="mt-2 list-disc list-inside">
                    <li>Create a realistic study plan with specific daily goals.</li>
                    <li>Use mock tests and diagnostic assessments to track progress.</li>
                    <li>Study in focused sessions (e.g., 45-minute blocks with short breaks).</li>
                </ul>
                <p className="mt-4 text-lg font-bold">🚀 Tip:</p>
                <p className="text-lg">
                    Students at Projectile 45 Tuition follow structured learning plans to stay on track and build confidence well before exam day.
                </p>
            </section>

            <section className="mt-8 text-gray-800">
                <h2 className="text-2xl font-semibold text-headingcol">Step 2: Develop a Positive Test-Taking Mindset</h2>
                <p className="mt-2 text-lg">
                    Your mindset plays a huge role in exam success. Instead of worrying about what could go wrong, train your brain to stay positive.
                </p>
                <ul className="mt-2 list-disc list-inside">
                    <li>Visualize success – Picture yourself confidently answering questions.</li>
                    <li>Use positive affirmations – Repeat phrases like &quot;I am prepared and capable.&quot;</li>
                    <li>Avoid negative self-talk – Don’t focus on past mistakes.</li>
                </ul>
                <p className="mt-4 text-lg font-bold">📌 Why it works:</p>
                <p className="text-lg">
                    Developing a positive test-taking mindset reduces stress and helps you stay motivated while preparing for SAT/GMAT or other exams.
                </p>
            </section>

            <section className="mt-8 text-gray-800">
                <h2 className="text-2xl font-semibold text-headingcol">Step 3: Use Mindfulness Techniques for Test-Day Success</h2>
                <p className="mt-2 text-lg">
                    If you feel overwhelmed, mindfulness techniques can help you stay calm and focused during exams.
                </p>
                <ul className="mt-2 list-disc list-inside">
                    <li>Deep breathing exercises – Inhale for four seconds, hold, then exhale slowly.</li>
                    <li>Progressive muscle relaxation – Tense and release each muscle group.</li>
                    <li>Meditation and guided visualization – Picture yourself in a calm, confident state.</li>
                </ul>
                <p className="mt-4 text-lg font-bold">📌 Pro Tip:</p>
                <p className="text-lg">
                    Even just 5-10 minutes of mindfulness before an exam can significantly reduce stress.
                </p>
            </section>

            <section className="mt-8 text-gray-800">
                <h2 className="text-2xl font-semibold text-headingcol">Step 4: Master Best Time Management Strategies for Exams</h2>
                <p className="mt-2 text-lg">
                    Many students struggle to finish exams on time, leading to panic and rushed answers. Practicing time management strategies can boost efficiency.
                </p>
                <ul className="mt-2 list-disc list-inside">
                    <li>Use timed practice tests to simulate real exam conditions.</li>
                    <li>Start with easy questions to build confidence and save time.</li>
                    <li>Allocate time per section to avoid getting stuck on tough problems.</li>
                </ul>
                <p className="mt-4 text-lg font-bold">🚀 Tip:</p>
                <p className="text-lg">
                    Projectile 45 Tuition helps students master time-saving techniques to improve speed and accuracy under pressure.
                </p>
            </section>

            <section className="mt-8 text-gray-800">
                <h2 className="text-2xl font-semibold text-headingcol">Step 5: Keep a Balanced Routine</h2>
                <p className="mt-2 text-lg">
                    Exam preparation isn’t just about studying—it’s about maintaining balance. Poor sleep, unhealthy eating, and excessive caffeine can increase test anxiety.
                </p>
                <ul className="mt-2 list-disc list-inside">
                    <li>Get 7-9 hours of sleep each night.</li>
                    <li>Eat brain-boosting foods (e.g., nuts, fruits, whole grains).</li>
                    <li>Avoid too much caffeine or energy drinks.</li>
                </ul>
                <p className="mt-4 text-lg font-bold">📌 Pro Tip:</p>
                <p className="text-lg">
                    A healthy body leads to better memory, concentration, and problem-solving skills during the test.
                </p>
            </section>

            
            {/* Final Thoughts Section */}
            <section className="mt-8 border-t pt-8 text-gray-800">
                <h2 className="text-2xl font-semibold text-headingcol">Final Thoughts: How to Stay Motivated While Preparing for SAT/GMAT and Other Exams</h2>
                <p className="mt-2 text-lg">
                    The key to staying motivated and reducing test anxiety is consistent preparation, mindfulness, and positive thinking.
                </p>
                <ul className="mt-4 list-disc list-inside">
                    <li>Start early and follow a structured study plan.</li>
                    <li>Use relaxation techniques to stay calm.</li>
                    <li>Develop time management skills through practice.</li>
                    <li>Build confidence by focusing on strengths.</li>
                </ul>
                <p className="mt-4 text-lg font-bold text-headingcol">🚀 Need extra support?</p>
                <p className="text-lg">
                    Projectile 45 Tuition offers expert coaching to help students overcome fear of exams and improve performance with personalized study plans.
                </p>
                <p className="mt-4 text-lg font-bold text-headingcol">🔥 With the right mindset and preparation, you can conquer any exam!</p>
            </section>
        </div>
    );
};

export default BlogPost;
