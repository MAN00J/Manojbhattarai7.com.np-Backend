import ContentenquiryModel from "../../models/content.model.js"

let listContent = async(req,res)=>{
     try{
        const lists = await ContentenquiryModel.find()
        if(!lists){
            res.status(400).json({message:"Content not found"})
        }

        res.status(200).json(lists)
     }catch{
            res.status(401).json({message:"server Error"})
     }
}

export default listContent;