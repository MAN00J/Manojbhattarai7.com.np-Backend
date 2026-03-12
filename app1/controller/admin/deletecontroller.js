import ContentenquiryModel from "../../models/content.model.js";
import deletecloudinary from "../../utils/cloudinaryDelete.js";

const deleteContent = async (req, res) => {
  try {
    const id = req.params.id;
    

      
    const post = await ContentenquiryModel.findById(id);

    if (!post) {
      return res.status(404).json({ message: "Content not found" });
    }
  await deletecloudinary(post.imgurl)
   
    
    await post.deleteOne();

    res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export default deleteContent;
