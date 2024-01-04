import express from "express";
import morgan from "morgan";

const app = express();
app.use(morgan("dev"));
app.use(express.json());

console.log(process.env);

app.get("/", (req, res) => {
  res.send("Hello from typescript");
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));

export default app;
