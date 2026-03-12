import enquiryModel from "../../models/user.model.js";

let enquiryInsert = async (req, res) => {
    try {
        // Make sure req.body is defined
        if (!req.body) {
            return res.status(400).send({ status: 0, message: "No data provided" });
        }

        const { sname, semail, smessage,sdate } = req.body;

        
        if (!sname || !semail || !smessage || !sdate) {
            return res.status(400).send({ status: 0, message: "All fields are required" });
        }

        
        const enquiry = new enquiryModel({
            name: sname,
            email: semail,
            message: smessage,
            Date : sdate
        });

        await enquiry.save();

        res.send({ status: 1, message: "Inserted" });
    } catch (err) {
        res.status(500).send({ status: 0, message: "Failed", error: err.message });
    }
};

export default enquiryInsert;
