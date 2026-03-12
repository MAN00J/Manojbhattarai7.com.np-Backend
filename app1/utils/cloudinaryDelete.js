import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv"
dotenv.config()
cloudinary.config({
    cloud_name: process.env.Cloudnary_Name,
    api_key: process.env.Cloudnary_Key,
    api_secret: process.env.Cloudnary_Secrete,
});



const deletecloudinary = async (id) => {
    try {
        const getPublicIdFromUrl = (url) => {
            // Example: https://res.cloudinary.com/<cloud_name>/image/upload/v12345/foldername/filename.jpg
            const parts = url.split("/upload/")[1];      // foldername/filename.jpg
            const withoutVersion = parts.split("/").slice(1).join("/"); // remove v12345
            const publicId = withoutVersion.replace(/\.[^/.]+$/, ""); // remove file extension
            return publicId;
        };
        let publicid = getPublicIdFromUrl(id);
        const result = await cloudinary.uploader.destroy(publicid);
        
        return result;
    } catch (err) {
        console.error("❌ Cloudinary delete error:", err);
        throw err;
    }
}

export default deletecloudinary;