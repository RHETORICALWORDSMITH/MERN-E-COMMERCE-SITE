import mongoose from "mongoose";

const animeSchema = mongoose.Schema({
    name: String,
    price: Number,   
    category: String,
    image: String,
    title: String,
})

const Anime  = mongoose.model("animes", animeSchema);

export default Anime;