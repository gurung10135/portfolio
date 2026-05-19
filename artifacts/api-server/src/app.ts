import express, { type Express } from "express";
import cors from "cors";
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();
const httpLogger = (require("pino-http") as any)({ logger });

app.use(httpLogger);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;