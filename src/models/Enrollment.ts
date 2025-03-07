import mongoose, { Schema } from "mongoose";

const enrollmentSchema = new Schema({
  course: {
    type: Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  student: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  progress: {
    type: Number,
    default: 0,
    min: 0,
    max: 100,
  },
});

export default mongoose.models.Enrollment ||
  mongoose.model("Enrollment", enrollmentSchema);
