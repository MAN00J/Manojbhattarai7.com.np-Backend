import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';

import enquiryInsert from './app1/controller/web/enquiryController.js';
import Adminrouter from './app1/routes/web/Adminroutes.js';
import DashRouter from './app1/routes/web/Dashroutes.js';
import Readrouter from './app1/routes/web/Enquiryreadrouter.js';
import Contentenquiryadd from './app1/routes/web/EnquiryContentadd.js';
import listrouter from './app1/routes/web/listcontentRouter.js';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// CORS Setup
const allowedOrigins = [
  "https://manojbhattarai7.com.np", // live frontend
  "http://127.0.0.1:5500"           // local testing
];

app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin (Postman, mobile apps)
    if(!origin) return callback(null, true);
    if(allowedOrigins.includes(origin)){
      return callback(null, true);
    } else {
      return callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

// Routes
app.use('/api/website/enquiry', enquiryInsert);
app.use('/api/website/read', Readrouter);
app.use('/api/website/admin', Adminrouter);
app.use('/api/admin/dashboard', DashRouter);
app.use('/api/website/content', Contentenquiryadd);
app.use('/api/website/content', listrouter);

// Connect to MongoDB
mongoose.connect(process.env.dburl)
    .then(() => {
        console.log("MongoDB connected");
        const port = process.env.PORT || 8050; // use capital PORT for Render
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    })
    .catch(err => console.error("MongoDB connection error:", err));
