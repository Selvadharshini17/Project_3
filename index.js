import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/users.js";
import cors from "cors";
const app =express();
const port=5000;

app.use(bodyParser.json());
app.use(cors());

app.use("/",userRoutes);

app.get("/",(req,res) => res.send("hello Programmer!"));
app.all("*",(req,res) => res.send("routes doesn't exist"));
app.listen(port,()=> console.log(`listening on port ${port}`));
