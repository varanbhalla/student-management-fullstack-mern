import express, { Router } from "express";
import { getStudents, createStudent } from "../controllers/student.js";
import studentModel from "../models/student.js";

const router = express.Router();

router.get("/", getStudents);
router.post("/", createStudent);

export default router;
