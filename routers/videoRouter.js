import express from "express";
import routes from "../routes";
import {
    videos,
    getUpload,
    videoDetail,
    editVideo,
    deleteVideo,
    postUpload
} from "../controllers/videoController";


const videoRouter = express.Router();

// Upload 
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);


export default videoRouter;