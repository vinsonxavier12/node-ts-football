import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import app from "./app";

mongoose
  .connect(process.env.DB)
  .then(() => console.log("DB connected successfully"));

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
