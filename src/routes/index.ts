import { Router } from "express";
import { contactRouter } from "./my-contacts.routes";

export const baseRouter = Router();

baseRouter.use("/contacts", contactRouter);