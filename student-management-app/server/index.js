import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import studentRoutes from "./routes/student.js";

const app = express();
// app is like the object of the class express, i.e. we are creating an instance of the express library into the app

app.use("/students", studentRoutes);

app.use(bodyParser.json({ limit: "20mb", extended: true }));
// extended: true,  will allow anything to parse along with the string, on the other hand, if the extended: false, then the bodyParser will only parse string
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));

app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://varan:@cluster0.zurfr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Connection is established and running on Port: ${PORT}`);
    })
  )
  .catch((err) => {
    console.log(err.message);
  });

mongoose.set("useFindAndModify", false);
