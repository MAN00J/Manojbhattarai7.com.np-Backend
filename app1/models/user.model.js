import mongoose from 'mongoose';
let Schema = mongoose.Schema;
let enquirySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    Date: {
        type: String,
        required: true
    }
});

let enquiryModel = mongoose.model('Enquiry', enquirySchema);
export default enquiryModel;