import express from "express";
import { contactsController } from "../controller/index";
import { contactsValidator, validator } from "../validators";

export const contactRouter = express.Router();

contactRouter.get("/:id", contactsValidator.id, validator, contactsController.getContact);

contactRouter.get("/", contactsController.getAllContacts);

contactRouter.post("/", contactsValidator.create, validator, contactsController.create);

contactRouter.put("/:id", contactsValidator.id, contactsValidator.update, validator, contactsController.update);

contactRouter.delete("/:id", contactsValidator.id, validator, contactsController.deleteContact);
