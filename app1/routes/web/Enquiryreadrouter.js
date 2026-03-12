import express from 'express';
import Readmessage from '../../controller/admin/readenquiryconroller.js';
import verifyToken from '../../middleware/Tokenvarify.js';



let Readrouter  = express.Router()

Readrouter.get('/all',verifyToken,Readmessage);

export default Readrouter;