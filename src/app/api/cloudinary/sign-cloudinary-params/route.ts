import { cloudinary } from "@/lib/cloudinary";
import { CloudinaryApiSecret } from "@/lib/constants";

export async function POST(request: Request) {
    const body = await request.json();
    const { paramsToSign } = body;
    const signature = cloudinary.utils.api_sign_request(paramsToSign, CloudinaryApiSecret as string);
    return Response.json({ signature });
}