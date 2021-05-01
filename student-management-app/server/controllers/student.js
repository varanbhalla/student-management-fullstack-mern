import StudentData from "../models/student.js";

export const getStudents = async (req, res) => {
  try {
    const data = {
      age: 20,
      name: "Tommy"
    }
    const allStudents = await StudentData.find();
    res.send(201).json(allStudents);
    return;
  } catch (error) {
    res.sendStatus(404).json({ message: error.message });
    return;
  }
};

export const createStudent = async (req, res) => {
  const newStudentRequest = req.body;
  const newStudent = new StudentData(newStudentRequest);

  try {
    await newStudent.save();
    res.sendStatus(201).json(newStudent);
    return;
  } catch (error) {
    res.sendStatus(409).json({ message: error.message });
    return;
  }
};
