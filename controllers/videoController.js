import {videos} from "../db";
export const home = (req, res) => res.render("home", { pageTitle: "Home", videos});

export const search = (req, res) => {
    const { query: { term: searchingBy }
    } = req;
    res.render("search", { pageTitle: "Search", searchingBy });


};

// export const videos = (req, res) => res.send("videos");
export const upload = (req, res) => res.send("upload", { pageTitle: Upload });
export const videoDetail = (req, res) => res.send("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) => res.send("editVideos", { pageTitle: "Edit Videos" });
export const deleteVideos = (req, res) => res.send("deleteVideos", { pageTitle: "Delete Vidoes" });
