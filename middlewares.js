import multer from "multer";

import routes from "./routes";

const multerVideo = multer({
    dest: "uploads/videos/"
});
export const localMiddleware = (req, res, next) => {
    res.locals.siteName = "MinTube";
    res.locals.routes = routes;
    res.locals.user = req.user || {};
    console.log(req.user);
    next();
};

export const uploadVideo = multerVideo.single("videoFile");