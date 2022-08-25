import express from "express";
import httpProxy from "http-proxy";

const proxy = httpProxy.createProxyServer({});

const forwardHandler = (): express.Router => {
  const router = express.Router();

  router.use("*", async (req: express.Request, res: express.Response) => {
    proxy.web(req, res, { target: "" });
  });

  return router;
};

export default forwardHandler;
