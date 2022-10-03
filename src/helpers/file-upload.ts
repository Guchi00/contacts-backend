import { v2 } from 'cloudinary';
import dotenv from "dotenv";

dotenv.config();

const {
    CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_SECRET,
    CLOUDINARY_API_KEY,
} = process.env;

console.log(CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_SECRET,
    CLOUDINARY_API_KEY, 'upload configs >>>>')

v2.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
    secure: true,
});

export const fileUpload = async (base64: string) => {
    try {
        const result = await v2.uploader.upload(
            base64,
            {
                upload_preset: 'ml_default'
            }
        );

        return result;
    } catch (e) {
        return null;
    }
};
