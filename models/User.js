import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    avartarUrl: String,
    facebookId: Number,
    githubId: Number
});

UserSchema.plugin(passportLocalMongoose, {
    usernameField: "emial"
});
const model = mongoose.Model("User", UserSchema);

UserSchema.

export default model;