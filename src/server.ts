import swagger from "swagger-ui-express";

import { app } from ".";
import swaggerFile from "./docs/swagger";

app.use("/api-docs", swagger.serve, swagger.setup(swaggerFile()));
app.listen(3333, () => console.log("Server is running!"));
