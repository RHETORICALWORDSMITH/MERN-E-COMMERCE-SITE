import Anime from "../models/anime.model.js";

const getAnime = async (req, res) => {
  try {
    const anime = await Anime.find(); //searches the anime folder in database
    res.status(200).json(anime);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error });
  }
};

export default getAnime;
