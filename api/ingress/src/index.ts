import express from "express";

import forwardHandler from "./handler/forwardHandler";

const app = express();

app.use(forwardHandler());

app.listen(process.env.PORT || 3000);
