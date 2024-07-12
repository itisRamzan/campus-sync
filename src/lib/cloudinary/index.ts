import { v2 as Cloudinary } from "cloudinary";
import { CloudinaryApiKey, CloudinaryApiSecret, CloudinaryCloudName } from "../constants";

Cloudinary.config({
    cloud_name: CloudinaryCloudName,
    api_key: CloudinaryApiKey,
    api_secret: CloudinaryApiSecret,
});

export const cloudinary = Cloudinary;

export async function getCloudinarySignature() {
    const timestamp = Math.round(new Date().getTime() / 1000);
    const signature = Cloudinary.utils.api_sign_request({ timestamp: timestamp }, CloudinaryApiSecret as string);
    return { signature, timestamp };
}