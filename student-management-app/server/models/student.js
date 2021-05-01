import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  registrationNo: Number,
  name: String,
  grade: String,
  section: {
    type: String,
    default: "A",
  },
});

const student = mongoose.model("student", studentSchema);

export default student;
