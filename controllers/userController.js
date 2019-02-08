import routes from "../routes";
import User from "../models/User";
import passport from "passport";

export const getJoin = (req, res) => {
    res.render("join", {
        pageTitle: "Join"
    })
}
export const githubLogin = passport.authenticate("github");
export const postJoin = async (req, res) => {
    const {
        body: {
            name,
            email,
            password,
            password2
        }
    } = req
    if (password !== password2) {
        res.status(400)
        res.render("join", {
            pageTitle: "Join"
        })
    } else {
        try {
            const user = await User({
                name,
                email
            })
            await User.register(user, password)
            next();
        } catch (error) {
            console.log(error)
            res.redirect(routes.home);

        }

        // To Do : Register User
        // To do : Log user in
    }
}
export const githubLoginCallback = async (accessToken, refreshToken, profile, cb) => {
    const {
        _json: {
            id,
            avatar_url,
            name,
            email
        }
    } = profile;
    try {

    } catch (error) {

    }
};
export const getLogin = (req, res) =>
    res.render("login", {
        pageTitle: "Log in"
    })
export const postLogin = passport.authenticate("local", {
    failureRedirect: routes.login,
    successRedirect: routes.home
});
export const logout = (req, res) => {
    req.logout();
    // To Do : Process Log Out
    res.redirect(routes.home)
}
export const users = (req, res) =>
    res.render("users", {
        pageTitle: "Users"
    })
export const userDetail = (req, res) =>
    res.render("userDetail", {
        pageTitle: "User Detail"
    })
export const editProfle = (req, res) =>
    res.render("editProfile", {
        pageTitle: "Edit Profile"
    })
export const changePassword = (req, res) =>
    res.render("changePassword", {
        pageTitle: "Change Password"
    })

export const postGithubLogin = (req, res) => {
    res.send(routes.home);

}