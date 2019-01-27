import routes from "../routes";
import Video from "../models/Video";
export const home = async(req, res) => {

    const videos = await Video.find({});
    res.render("home", {pageTitle : "Home",videos});
};


export const search = (req, res) => {
    const {
        query: {
            term: searchingBy
        }
    } = req;
    res.render("search", {
        pageTitle: "Search",
        searchingBy,
        videos
    });


};

// export const videos = (req, res) => res.send("videos");
export const getUpload = (req, res) => {
    res.render("upload", {
        pageTitle: "Upload"
    });

};

export const postUpload = (req, res) => {
    const {
        body: {
            file,
            title,
            descriptiuon
        }
        // To Do : Upload and save video

    } = req;
    res.redirect(routes.videoDetail(324393));

};
export const videoDetail = (req, res) => res.render("videoDetail", {
    pageTitle: "Video Detail"
});
export const editVideo = (req, res) => res.send("editVideos", {
    pageTitle: "Edit Videos"
});
export const deleteVideo = (req, res) => res.send("deleteVideos", {
    pageTitle: "Delete Vidoes"
});