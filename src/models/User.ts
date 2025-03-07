import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    name: { type: String },
    role: {
        type: String,
        enum: ["ADMIN", "TEACHER", "STUDENT"],
        default: "STUDENT"
    },
    courses: [{
        type: Schema.Types.ObjectId,
        ref: "Course"
    }],
    enrollments: [{
        type: Schema.Types.ObjectId,
        ref: "Enrollment"
    }]
    
})

export default mongoose.models.User || mongoose.model("User", userSchema)