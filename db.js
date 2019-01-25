import mongoose from "mongoose";


mongoose.cennect("mongodb://localhost:27017/MinTube",
{
    useNewUrlParser : true, 
    useFindAndModify : false
}
);

