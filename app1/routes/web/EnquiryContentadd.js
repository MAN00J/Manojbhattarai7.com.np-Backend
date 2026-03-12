import express from 'express'
import AddContent from '../../controller/admin/AddContentEnquiry.js';
import verifyToken from '../../middleware/Tokenvarify.js';
import upload from '../../middleware/multer.middleware.js';


let Contentenquiryadd =  express.Router();

Contentenquiryadd.post('/add',verifyToken,upload.single("file"),AddContent)

export default Contentenquiryadd;