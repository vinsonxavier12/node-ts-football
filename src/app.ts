import express from "express";
import morgan from "morgan";

import { router } from "./routers/playerRouter";

const app = express();
app.use(morgan("dev"));
app.use(express.json());

router.use("/api/players/");

export default app;
