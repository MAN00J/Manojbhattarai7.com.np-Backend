import enquiryModel from "../../models/user.model.js";

const Readmessage = async(req,res)=>{
    try{
       let Usermessage = await enquiryModel.find()
       res.status(200).json({Usermessage})
        
    }catch(err){
         res.status(400).json({message:"something went wrong"})
    }
}

export default Readmessage;