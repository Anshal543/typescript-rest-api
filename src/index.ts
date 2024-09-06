import dotenv from "dotenv";
import express from "express";
import userRouter from "./routes/users.router";
import connectDB from "./db/index.db";
dotenv.config({ path: "./.env" });

const app = express();
connectDB();
app.use(express.json());
app.use("/api/", userRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
