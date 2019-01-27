import mongoose from "moongose";

const CommnetSchema = new mongoose.Schema({
    text: {
        type;String,
        required: "Text is required"
    },
    createAt:{
        type: Date,
        default : Date.no

    },
    
});

const model = mongoose.model("Comment",CommnetSchema);
export default model;