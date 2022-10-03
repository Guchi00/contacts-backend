import Contacts from "../models/contacts.schema";
import { fileUpload } from "../helpers/file-upload";

export type ContactsType = {
    name: string;
    phoneNumbers: string;
    gender: string;
    image: string;
    age?: number;
    occupation?: string;
}

export const get = (id: string) => {
    return Contacts.findById(id)
}

export const getAll = () => {
    return Contacts.find().sort({createdAt: -1 });
}

export const create = (body: ContactsType) => {
    return Contacts.create( body );
}

export const update = (id: string, body: ContactsType) => {
    return Contacts.findByIdAndUpdate(id, {body});
}

export const deleteById = (id: string) => {
    return Contacts.findByIdAndDelete(id)
}