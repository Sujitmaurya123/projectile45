import emailjs from "emailjs-com";

// Function to send email via EmailJS
export const sendEmail = async (
  templateId: string,                  // Template ID from EmailJS
  variables: Record<string, string>    // Variables for the email template
): Promise<boolean> => {
  try {
    // Send the email using EmailJS
    const result = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,   // EmailJS Service ID from .env
      templateId,                                    // EmailJS Template ID
      variables,                                     // Variables to replace in the email template
      process.env.NEXT_PUBLIC_EMAILJS_USER_PUBLIC_KEY! // Public key from .env (authentication)
    );

    // Return true if the email was sent successfully (status 200)
    return result.status === 200;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};
