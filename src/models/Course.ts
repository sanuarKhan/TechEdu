import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  instructor: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  students: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

export default mongoose.models.Course || mongoose.model("Course", courseSchema);
