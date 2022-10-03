import mongoose from "mongoose";

export const contactsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phoneNumbers: {
        type: [String],
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: false,
    },
    occupation: {
        type: String,
        required: false
    }
}, { timestamps: true });

const Contacts = mongoose.model("Contacts", contactsSchema);

export default Contacts;