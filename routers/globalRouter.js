import express from "express";
import routes from "../routes";
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
    githubLogin
} from "../controllers/userController";

const globalRouter = express.Router();

import {
    onlyPublic
} from "../middlewares"
globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);




globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, onlyPublic, logout);


globalRouter.get(routes.github, githubLogin);
export default globalRouter;