import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv"
dotenv.config()
cloudinary.config({
  cloud_name:process.env.Cloudnary_Name,
  api_key:process.env.Cloudnary_Key,
  api_secret:process.env.Cloudnary_Secrete,
});

const uploadOncloud = async (localpath) => {
  try {
    if (!localpath) return null;

    const response = await cloudinary.uploader.upload(localpath, {
      resource_type: "auto",
    });

    // Delete local file after successful upload
    if (fs.existsSync(localpath)) {
      fs.unlinkSync(localpath);
    }

    
    return response; // return the response, not err
  } catch (err) {
    // Delete local file if upload fails
    if (fs.existsSync(localpath)) {
      fs.unlinkSync(localpath);
    }


    throw err;
  }
};

export default uploadOncloud;
