import mongoose, { Schema, Document } from "mongoose";

interface IFaq extends Document {
  question: string;
  answer: string;
}

const FaqSchema = new Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
});

export default mongoose.models.Faq || mongoose.model<IFaq>("Faq", FaqSchema);
