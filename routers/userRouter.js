import express from "express";
import routes from "../routes";

import {
    users,
    userDetail,
    editProfle,
    changePassword
} from "../controllers/userController";

import {
    onlyPrivate
} from "../middlewares";


const userRouter = express.Router();




userRouter.get(routes.users, users);

userRouter.get(routes.userDetail(), userDetail);

userRouter.get(routes.editProfle, onlyPrivate, editProfle);

userRouter.get(routes.changePassword, onlyPrivate, changePassword);

export default userRouter;