const mongoose = require("mongoose");

const GallerySchema = new mongoose.Schema({
    image : {
        type : String,
    },
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "categories",
    }
});

const GalleryMoodel = mongoose.model("galleries", GallerySchema);

module.exports = GalleryMoodel;