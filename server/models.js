const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Your product must have a title"],
        minlength: [4, "Your product title must be at least 4 characters long"]
    },
    price: {
        type: Number,
        required: [true, "Each product must have a price."]
    },
    imageurl: {
        type: String,
        default: ""
    }
}, { timestamps: true })

mongoose.connect("mongodb://localhost:27017/ppmdb", { useNewUrlParser: true }, (errs) => console.log(errs ? errs : "db is lookin good"));

module.exports = mongoose.model("Product", ProductSchema);