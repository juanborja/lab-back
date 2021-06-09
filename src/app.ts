/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { stockRouter } from "./stock/stock.router";

dotenv.config();
/**
 * App Variables
 */
if (!process.env.PORT) {
  process.exit(1);
}

const PORT = 8888;
const app = express();
/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors()); //Enable cors for any origin
app.use(express.json()); //Recognize incoming request as json
app.use("/api/stocks", stockRouter);
app.use("/test", (req, res) => {
  return res.status(200).send("OK");
});
/**
 * Server Activation
 */
const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
/**
 * Webpack HMR Activation
 */
type ModuleId = string | number;

interface WebpackHotModule {
  hot?: {
    data: any;
    accept(
      dependencies: string[],
      callback?: (updatedDependencies: ModuleId[]) => void
    ): void;
    accept(dependency: string, callback?: () => void): void;
    accept(errHandler?: (err: Error) => void): void;
    dispose(callback: (data: any) => void): void;
  };
}

declare const module: WebpackHotModule;

if (module.hot) {
  console.log("here");
  module.hot.accept();
  module.hot.dispose(() => server.close());
}
