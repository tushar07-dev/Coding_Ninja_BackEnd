import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.get("/" , (req, res) => res.send("Hello from Express"));

app.listen(port, () => console.log("Server is listning on port"))