import { Schema, model, models } from "mongoose";

const formSubmissionSchema = new Schema(
  {
    firstName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    courses: { type: [String], required: true },
    consent: { type: Boolean, required: true },
  },
  { timestamps: true }
);

export const FormSubmission =
  models.FormSubmission || model("FormSubmission", formSubmissionSchema);
