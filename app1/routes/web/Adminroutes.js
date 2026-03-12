import express from 'express';
import Authcheck from '../../controller/admin/AdminController.js';

let Adminrouter = express.Router();

Adminrouter.post("/login",Authcheck);

export default Adminrouter;