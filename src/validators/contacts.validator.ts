import { body, param } from "express-validator";
import  Contact  from "../models/contacts.schema";

export const id = [
    param('id')
        .exists()
        .withMessage('id is required')];

export const create = [
    body("phoneNumbers")
        .exists()
        .withMessage("phone number is required")
        .isArray()
        .withMessage("phoneNumber must be a string array"),
    body("phoneNumbers.*")
        .isString()
        .withMessage("phoneNumbers must be a string array")
        .custom(async (value) => {
            const findOne = await Contact.findOne({ phoneNumbers: {
                $in: [...value]
            } });

            console.log(findOne, 'fine One >>>')
            if (findOne) {
                throw new Error("phone already exists")
            }
            throw new Error("phone already exists")
            return true;
        }),
    body("name")
        .exists()
        .withMessage("contact name is required")
        .bail()
        .isString()
        .withMessage("name must be a string"),
    body("gender")
        .exists()
        .withMessage("gender is required")
        .bail()
        .isString()
        .withMessage("gender must be a string"),
    body("image")
        .exists()
        .withMessage("image is required")
        .bail()
        .isString()
        .withMessage("image must be a url"),
    body("age")
        .optional()
        .trim()
        .isString()
        .withMessage("age must be number"),
    body("occupation")
        .optional()
        .trim()
        .isString()
        .withMessage("occupation must be string")
]

export const update = [
    body("phoneNumber").isArray().withMessage("phoneNumber must be a string array")
        .optional()
        .trim()
        .isString()
        .withMessage("phoneNumber must be a string array"),
    body("name")
        .optional()
        .trim()
        .isString()
        .withMessage("name must be a string"),
    body("gender")  
        .optional()
        .trim()
        .isString()
        .withMessage("gender must be a string"),
    body("image")
        .optional()
        .trim()
        .isString()
        .withMessage("image must be a url"),
    body("age")
        .optional()
        .trim()
        .isString()
        .withMessage("age must be a number"),
    body("occupation") 
        .optional()
        .trim()   
        .isString()
        .withMessage("occupation must be a string")
]

