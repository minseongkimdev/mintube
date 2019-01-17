import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parse";
const app = express();
const PORT = 4000;

const handleListening = () =>
    console.log("Listnening on http://localhost:4000");
const handleHome = (req, res) =>
    res.send("Hello from Home!");

const handleProfile = (req, res) =>
    res.send("You are on my profile!");

const middleware = (req, res, next) => {
    res.send("not happen");
}
app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

app.use(morgan("dev"));
app.get("/", middleware, handleHome);



app.get("/profile", handleProfile);

app.listen(4000, handleListening);

