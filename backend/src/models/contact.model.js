import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: String,
    email: String,
    message: String,
  },
  { timestamps: true }
);

const contactModel = mongoose.model("Contact", contactSchema);
export default contactModel;
