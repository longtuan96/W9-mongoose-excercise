const Genre = require("../models/genre");

const genreController = {};

genreController.createGenre = async (req, res, next) => {
  try {
    const { name } = req.body;
    const genre = new Genre({ name: name });
    await genre.save();
    res
      .status(200)
      .json({ status: "success", data: genre, message: "new Genre created" });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.message });
  }
};

genreController.getGenre = async (req, res, next) => {
  try {
    const allGenres = await Genre.find();
    res.status(200).json({
      success: true,

      data: allGenres,

      message: `All Genres listed`,
    });
  } catch (error) {
    res.status(400).json({
      success: false,

      error: err.message,
    });
  }
};

genreController.getSingleGenre = async (req, res, next) => {
  try {
    const { id } = req.params;
    const singleGenre = await Genre.findById(id);
    res.status(200).json({
      success: true,

      data: singleGenre,

      message: `Author ${singleGenre.name} found!`,
    });
  } catch (error) {
    res.status(400).json({
      success: false,

      error: err.message,
    });
  }
};
genreController.updateGenre = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const selectedGenre = await Author.findByIdAndUpdate(
      id,
      { name: name },
      { new: true }
    );
    res.status(200).json({
      success: true,

      data: selectedGenre,

      message: `Author ${selectedGenre.name} updated!`,
    });
  } catch (error) {
    res.status(400).json({
      success: false,

      error: err.message,
    });
  }
};

genreController.deleteGenre = async (req, res, next) => {
  try {
    const { id } = req.params;
    const selectedGenre = await Genre.findByIdAndDelete(id);
    res.status(200).json({
      success: true,

      data: selectedGenre,

      message: `Deleted author ${selectedGenre.name}`,
    });
  } catch (error) {
    res.status(400).json({
      success: false,

      error: err.message,
    });
  }
};
module.exports = genreController;
