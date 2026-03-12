import express from 'express'
import listContent from '../../controller/admin/ContentlistController.js'
import verifyToken from '../../middleware/Tokenvarify.js';
import deleteContent from '../../controller/admin/deletecontroller.js';
import EditContent from '../../controller/admin/editContent.controller.js';
import upload from '../../middleware/multer.middleware.js';
import Readcontent from '../../controller/web/ReadContent.controller.js'
let listrouter = express.Router()

listrouter.get("/all",listContent);
listrouter.get("/number/:id",Readcontent);
listrouter.delete("/delete/:id",verifyToken,deleteContent)
listrouter.put("/edit/:id",verifyToken, upload.single("file"),EditContent)

export default listrouter;