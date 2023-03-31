import "reflect-metadata";
import express from "express";
import "express-async-errors";
import handleError from "./errors/handleError";
import userRoutes from "./routes/users.routes";
import sessionRoutes from "./routes/session.routes";
import contactRoutes from "./routes/contacts.routes";
import cors from "cors"

const app = express();
app.use(cors())
app.use(express.json());
app.use("/users", userRoutes);
app.use("/login", sessionRoutes);
app.use("/contacts", contactRoutes)
app.use(handleError);
// app.use(express.static("documentt"));
export default app;
