import routes from "./routes";
export const localMiddleware = (req, res, next) => {
    res.locals.siteName = "MinTube";
    res.locals.routes = routes;
    next();
};