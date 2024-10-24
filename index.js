const app = express();
import express from "express";

import { dbConn } from "./db/connection.js";

import { schema } from "./grahpql/schema.js";
const expressPlayground = playground.default;
import { createHandler } from "graphql-http/lib/use/express";
import playground from "graphql-playground-middleware-express"; 

dbConn();

app.use("/graphql", createHandler({ schema }));
app.get("/gui", expressPlayground({ endpoint: "/graphql" }));
app.use("*", (req, res, next) => {
  res.status(404).send({ error: "Not Found" });
});

app.listen(3000);