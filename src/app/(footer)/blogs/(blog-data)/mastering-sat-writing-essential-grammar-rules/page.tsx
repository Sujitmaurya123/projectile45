import { FC } from 'react';

const BlogPost: FC = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12 text-justify">
            <h1 className="text-4xl font-bold text-center text-headingcol mb-8">
                Mastering SAT Writing: Essential Grammar Rules for a High Score
            </h1>
            <p className="text-lg text-gray-800 leading-relaxed mb-8">
                Achieving a top score in the SAT Writing section requires a strong grasp of English grammar. This section tests your ability to identify and correct grammatical errors in a passage, making it crucial to understand key grammar rules. Here are the fundamental concepts you must master to excel in SAT Writing.
            </p>

            <h2 className="font-semibold text-xl text-headingcol mb-4">1. Subject-Verb Agreement</h2>
            <p className="text-lg text-gray-800 mb-8">
                A subject and its verb must agree in number (singular/plural).
                <br />
                <strong>Correct:</strong> The team is playing well.
                <br />
                <strong>Incorrect:</strong> The team are playing well.
            </p>
            <p className="text-lg text-gray-800 mb-8">
                If the subject is singular, the verb must also be singular, and vice versa. Be particularly careful with tricky subjects like &quot;each,&quot; &quot;everyone,&quot; or &quot;nobody,&quot; which are singular despite referring to multiple individuals.
            </p>

            <h2 className="font-semibold text-xl text-headingcol mb-4">2. Pronoun Agreement</h2>
            <p className="text-lg text-gray-800 mb-8">
                Pronouns must agree with their antecedents in gender and number.
                <br />
                <strong>Correct:</strong> The students lost their books.
                <br />
                <strong>Incorrect:</strong> The students lost his books.
            </p>
            <p className="text-lg text-gray-800 mb-8">
                When referring to singular subjects, use singular pronouns, and for plural subjects, use plural pronouns. Keep an eye out for indefinite pronouns such as &quot;anyone&&quot;; or &quot;someone,&quot&quot; which require singular pronouns.
            </p>

            <h2 className="font-semibold text-xl text-headingcol mb-4">3. Verb Tense Consistency</h2>
            <p className="text-lg text-gray-800 mb-8">
                Verb tenses should remain consistent within a sentence or passage.
                <br />
                <strong>Correct:</strong> She studied hard and passed the exam.
                <br />
                <strong>Incorrect:</strong> She studied hard and passes the exam.
            </p>
            <p className="text-lg text-gray-800 mb-8">
                Watch for context clues that indicate whether an event occurred in the past, present, or future.
            </p>

            <h2 className="font-semibold text-xl text-headingcol mb-4">4. Modifier Placement</h2>
            <p className="text-lg text-gray-800 mb-8">
                Modifiers should be placed next to the word they modify to avoid ambiguity.
                <br />
                <strong>Correct:</strong> The man with the hat is my friend.
                <br />
                <strong>Incorrect:</strong> The man is my friend with the hat.
            </p>
            <p className="text-lg text-gray-800 mb-8">
                Misplaced modifiers can lead to confusion, making sentences unclear. Ensure descriptive phrases are correctly positioned.
            </p>

            <h2 className="font-semibold text-xl text-headingcol mb-4">5. Parallel Structure</h2>
            <p className="text-lg text-gray-800 mb-8">
                Lists and comparisons should maintain the same grammatical structure.
                <br />
                <strong>Correct:</strong> She likes reading, writing, and swimming.
                <br />
                <strong>Incorrect:</strong> She likes to read, writing, and swimming.
            </p>
            <p className="text-lg text-gray-800 mb-8">
                When listing actions, keep verb forms consistent. This rule also applies to phrases like &quot;not only... but also&quot; and &quot;either... or.&quot;
            </p>

            <h2 className="font-semibold text-xl text-headingcol mb-4">6. Proper Comma Usage</h2>
            <p className="text-lg text-gray-800 mb-8">
                Commas help clarify meaning and separate elements in a sentence.
                <br />
                <strong>Correct:</strong> I bought apples, bananas, and grapes.
                <br />
                <strong>Incorrect:</strong> I bought apples bananas and grapes.
            </p>
            <p className="text-lg text-gray-800 mb-8">
                Commas should also be used after introductory phrases and to separate nonessential information.
            </p>

            <h2 className="font-semibold text-xl text-headingcol mb-4">7. Apostrophes for Possession</h2>
            <p className="text-lg text-gray-800 mb-8">
                Apostrophes indicate possession, not pluralization.
                <br />
                <strong>Correct:</strong> This is Maria’s book.
                <br />
                <strong>Incorrect:</strong> This is Marias book.
            </p>
            <p className="text-lg text-gray-800 mb-8">
                Use an apostrophe before &quot;s&quot; for singular nouns and after &quot;s&quot; for plural nouns.
            </p>

            <h2 className="font-semibold text-xl text-headingcol mb-4">8. Avoiding Sentence Fragments</h2>
            <p className="text-lg text-gray-800 mb-8">
                Every sentence must have a subject and a predicate.
                <br />
                <strong>Correct:</strong> She is going to the store.
                <br />
                <strong>Incorrect:</strong> Because she is going to the store.
            </p>
            <p className="text-lg text-gray-800 mb-8">
                Fragments often occur when dependent clauses are left incomplete.
            </p>

            <h2 className="font-semibold text-xl text-headingcol mb-4">9. Preventing Run-On Sentences</h2>
            <p className="text-lg text-gray-800 mb-8">
                Run-on sentences occur when independent clauses are incorrectly joined.
                <br />
                <strong>Correct:</strong> I was late, so I missed the bus.
                <br />
                <strong>Incorrect:</strong> I was late I missed the bus.
            </p>
            <p className="text-lg text-gray-800 mb-8">
                Use conjunctions, commas, or semicolons to separate independent clauses properly.
            </p>

            <h2 className="font-semibold text-xl text-headingcol mb-4">10. &quot;That&quot; vs. &quot;Which&quot;</h2>
            <p className="text-lg text-gray-800 mb-8">
                Use &quot;that&quot; for essential information: The book that I bought is excellent.
                <br />
                Use &quot;which&quot; for additional information: The book, which I bought last week, is excellent.
            </p>

            <h2 className="font-semibold text-xl text-headingcol mb-4">11. Correct Use of Colons and Semicolons</h2>
            <p className="text-lg text-gray-800 mb-8">
                Colons introduce lists or explanations, while semicolons connect independent clauses.
                <br />
                <strong>Correct:</strong> He has three hobbies: reading, writing, and swimming.
                <br />
                <strong>Incorrect:</strong> He has three hobbies; reading, writing, and swimming.
            </p>

            <h2 className="font-semibold text-xl text-headingcol mb-4">12. &quot;Fewer&quot; vs. &quot;Less&quot;</h2>
            <p className="text-lg text-gray-800 mb-8">
                Use &quot;fewer&quot; for countable items: I have fewer books than she does.
                <br />
                Use &quot;less&quot; for uncountable items: I have less sugar in my coffee.
            </p>

            <h2 className="font-semibold text-xl text-headingcol mb-4">Mastering SAT Writing with the Right Guidance</h2>
            <p className="text-lg text-gray-800 mb-8">
                Scoring high in SAT Writing requires consistent practice and expert guidance. At Projectile 45 Tuition, we provide structured lessons to help students strengthen their grammar and writing skills. Our experienced tutors offer personalized strategies to improve accuracy and efficiency, ensuring you achieve a top SAT score.
            </p>

            <h3 className="font-semibold text-lg text-headingcol mb-4">Final Tips for SAT Writing Success</h3>
            <ul className="list-inside mb-8 text-lg text-gray-800">
                <li>✅ Identify and eliminate grammar errors through consistent practice.</li>
                <li>✅ Learn common SAT grammar traps to avoid costly mistakes.</li>
                <li>✅ Take full-length SAT practice tests to build confidence and timing.</li>
                <li>✅ Work with expert instructors for personalized SAT preparation.</li>
            </ul>

            <p className="text-lg text-gray-800 mb-8">
                By mastering these grammar rules and implementing strategic SAT Writing techniques, you can significantly boost your score and improve your chances of getting into your dream college.
            </p>
            <p className="text-lg text-gray-800 mb-8">
                Need expert SAT tutoring? Projectile 45 Tuition offers customized study plans to help students excel in all sections of the SAT. Contact us today to start your journey toward success!
            </p>
        </div>
    );
};

export default BlogPost;
