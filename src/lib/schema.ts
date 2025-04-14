import { z } from "zod";

export const submissionSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  whatsapp: z.string().min(5),
  country: z.string(),
});

export type SubmissionData = z.infer<typeof submissionSchema>;