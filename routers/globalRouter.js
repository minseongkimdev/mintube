import express from "express";
import routes from "../routes";
import passport from "passport";

import {
    home,
    search
} from "../controllers/videoController";
import {
    getJoin,
    postJoin,
    getLogin,
    postLogin,
    logout,
    githubLogin,
    postGithubLogin
} from "../controllers/userController";

const globalRouter = express.Router();

import {
    onlyPublic,
    onlyPrivate
} from "../middlewares"
globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);




globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, onlyPrivate, logout);


globalRouter.get(routes.gitHub, githubLogin);

globalRouter.get(routes.githubCallback, passport.authenticate("github", {
        failureRedirect: "/login"
    }),

    postGithubLogin);
export default globalRouter;