import ContentenquiryModel from "../../models/content.model.js";


const Readcontent = async (req, res) => {
  try {
    const { id } = req.params; // fixed typo
    if (!id) {
      return res.status(400).json({ message: "Id required" });
    }

    const content = await ContentenquiryModel.findById(id);

    if (!content) {
      return res.status(404).json({ message: "Content not found" });
    }

    // Send content directly
    res.status(200).json(content);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

export default Readcontent;
