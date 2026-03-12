import mongoose from "mongoose";

let Schema = mongoose.Schema;

let ContentEnquiry = new Schema({
    title :{
        type : String,
        require:true
    },
    imgurl: {
        type:String,
        require:false
    },
    Htmlcode:{
      type:String,
      require:false
    },
       Csscode:{
      type:String,
      require:false
    },
       Jscode:{
      type:String,
      require:false
    },
    body :{
        type : String,
        require:true
    }
})
let ContentenquiryModel = mongoose.model('EnquiryContent', ContentEnquiry);

export default ContentenquiryModel;