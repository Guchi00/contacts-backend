import {NextFunction, Request, Response} from "express";

import { fileUpload } from '../helpers/file-upload';
import Contacts from "../models/contacts.schema";
import { get } from "../repository/contacts.repository";

export const getContact = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const post = await get(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        next(error);
    }
};

export const getAllContacts = async (req: Request, res: Response) => {
    try {
        const data = await Contacts.find().sort({ createdAt: -1 });
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send("Unexpected error occured");
    }
};

export const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { image, ...createContact } = req.body;
        const uploadedImage = await fileUpload(image);
        if (!uploadedImage) {
            return res.status(400).json({ msg: 'image upload failed' });
        }
        const newContact = await Contacts.create({
            image: uploadedImage.url,
            ...createContact,
        });
        
        res.status(201).send(newContact);
    } catch (error) {
        next(error)
    }
};

export const update = async (req: Request, res: Response) => {
    try {
        const updateById = await Contacts.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).send(updateById)
    } catch (error) {
        res.status(500).send("An error occured")
    }
};

export const deleteContact = async (req: Request, res: Response, next: Function) => {
    try {
        const deleteById = await Contacts.findByIdAndDelete(req.params.id);
        res.status(200).send(deleteById);
    } catch (error) {
        next(error)
    }
};