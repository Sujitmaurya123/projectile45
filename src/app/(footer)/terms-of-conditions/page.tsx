import React from 'react';
import Head from 'next/head';

const TermsAndConditions: React.FC = () => {
    return (
        <div className="container mx-auto px-14 py-5 text-justify max-w-6xl">
            <Head>
                <title>Terms and Conditions - Projectile45</title>
                <meta name="description" content="Read the Terms and Conditions for using Projectile45's educational services." />
            </Head>

            <div className="max-w-6xl mx-auto bg-white p-6 ">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Terms and Conditions</h1>

                <section className="space-y-6 text-gray-700">
                    <h2 className="text-xl font-semibold text-gray-900">1. Acceptance of Terms</h2>
                    <p>
                        By registering, accessing, or using Projectile45, you confirm that you are at least 13 years old (or the minimum age of digital consent in your jurisdiction) and agree to these Terms and Conditions. If you are under 18, you confirm that you have obtained parental or guardian consent to use the platform.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-900">2. Services Provided</h2>
                    <p>
                        Projectile45 offers online courses, study materials, practice tests, and other educational resources for IB, IGCSE, GRE, SAT, and GMAT. These services are provided for personal, non-commercial use only.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-900">3. User Registration</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>You must provide accurate and complete information during registration.</li>
                        <li>You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</li>
                        <li>Notify us immediately of any unauthorized use of your account or any other security breach.</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-gray-900">4. Payment and Refunds</h2>
                    <p>
                        Fees for courses and services are clearly stated on the website. Payment must be made in full before accessing paid content. Refunds are subject to our Refund Policy, which is available on the website. Refunds will not be provided for partially used courses or services unless otherwise stated.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-900">5. Intellectual Property</h2>
                    <p>
                        All content on Projectile45, including but not limited to videos, texts, graphics, and practice tests, is the property of Projectile45 or its licensors and is protected by copyright and intellectual property laws. You may not reproduce, distribute, modify, or create derivative works of any content without prior written consent from Projectile45.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-900">6. User Conduct</h2>
                    <p>
                        You agree not to use the website for any illegal or unauthorized purpose, share, sell, or transfer your account to another person, upload or distribute any harmful, offensive, or inappropriate content, or attempt to disrupt or interfere with the website&apos;s functionality or security.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-900">7. Privacy Policy</h2>
                    <p>
                        Your use of Projectile45 is subject to our Privacy Policy, which outlines how we collect, use, and protect your personal information. By using the website, you consent to the practices described in the Privacy Policy.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-900">8. Third-Party Links</h2>
                    <p>
                        Projectile45 may contain links to third-party websites or resources. We are not responsible for the content, accuracy, or practices of these external sites. Use them at your own risk.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-900">9. Disclaimer of Warranties</h2>
                    <p>
                        Projectile45 provides its services on an &quot;as-is&quot; and &quot;as-available&quot; basis. We do not guarantee that the website will be error-free, uninterrupted, or fully secure. We do not guarantee specific results, such as exam scores or admissions, as these depend on individual effort and circumstances.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-900">10. Limitation of Liability</h2>
                    <p>
                        Projectile45 and its affiliates shall not be liable for any indirect, incidental, or consequential damages arising from your use of the website or services, including but not limited to loss of data, profits, or business opportunities.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-900">11. Termination</h2>
                    <p>
                        We reserve the right to suspend or terminate your account and access to the website at our sole discretion, without notice, for any violation of these Terms and Conditions or for any other reason.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-900">12. Changes to Terms and Conditions</h2>
                    <p>
                        Projectile45 may update these Terms and Conditions at any time. And expect the users to keep themselves updated with the terms and conditions. 

                    </p>

                    <h2 className="text-xl font-semibold text-gray-900">13. Governing Law</h2>
                    <p>
                        These Terms and Conditions are governed by and construed in accordance with the laws of [Jaipur]. Any disputes arising from these terms shall be resolved exclusively in the courts of [Jaipur].

                    </p>

                    <h2 className="text-xl font-semibold text-gray-900">14. Contact Information</h2>
                    <p>
                        For any questions or concerns regarding these Terms and Conditions, please contact us at:
                        
                        <br />
                        <strong>Email:</strong> info@projectile45.com 
                        <br />
                       
                    </p>
                </section>
            </div>
        </div>
    );
};

export default TermsAndConditions;