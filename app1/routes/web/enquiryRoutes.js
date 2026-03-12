import express from 'express';
import enquiryInsert from '../../controller/web/enquiryController.js';


let enquiryRouter = express.Router();

enquiryRouter.post("/insert",enquiryInsert);






export default enquiryRouter;
