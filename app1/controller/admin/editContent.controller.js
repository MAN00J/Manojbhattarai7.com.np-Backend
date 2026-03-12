import ContentenquiryModel from "../../models/content.model.js";
import deletecloudinary from "../../utils/cloudinaryDelete.js";
import uploadOncloud from "../../utils/cloudnary.js";
import fs from "fs";

const EditContent = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: "Content ID required" });

    const { FTitle, htmlCode,cssCode,jsCode, FBody } = req.body;

    // Find existing content
    const content = await ContentenquiryModel.findById(id);
    if (!content) return res.status(404).json({ message: "Content not found" });

    // If a new image is uploaded, replace it
    let imgurl = content.imgurl; // keep old if no new image
    if (req.file) {
       await deletecloudinary(content.imgurl)
      const uploadResult = await uploadOncloud(req.file.path);
      imgurl = uploadResult.secure_url;
    }

    // Update fields
    content.title = FTitle || content.title;
    content.Htmlcode = htmlCode || content.Htmlcode;
    content.Csscode = cssCode ||   content.Csscode;
    content.Jscode = jsCode || content.Jscode;
    content.body = FBody || content.body;
    content.imgurl = imgurl;

    await content.save();

    res.status(200).json({ message: "Content updated successfully", content });
  } catch (err) {
    console.error("EditContent Error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export default EditContent;
