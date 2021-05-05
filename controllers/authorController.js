const Author = require("../models/author");
const Book = require("../models/book");

const authorController = {};

authorController.createData = async (req, res, next) => {
  try {
    const { name } = req.body;
    const author = new Author({ name: name });
    await author.save();
    res
      .status(200)
      .json({ status: "success", data: author, message: "new Author created" });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.message });
  }
};

authorController.getAuthor = async (req, res, next) => {
  try {
    const allAuthor = await Author.find();
    res.status(200).json({
      success: true,

      data: allAuthor,

      message: `All Authors listed`,
    });
  } catch (error) {
    res.status(400).json({
      success: false,

      error: err.message,
    });
  }
};

authorController.getSingleAuthor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const singleAuthor = await Author.findById(id);
    const books = await Book.find({ author: id });
    res.status(200).json({
      success: true,

      data: { singleAuthor, books },

      message: `Author ${singleAuthor.name} found!`,
    });
  } catch (error) {
    res.status(400).json({
      success: false,

      error: err.message,
    });
  }
};
authorController.updateAuthor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const selectedAuthor = await Author.findByIdAndUpdate(
      id,
      { name: name },
      { new: true }
    );
    res.status(200).json({
      success: true,

      data: selectedAuthor,

      message: `Author ${selectedAuthor.name} updated!`,
    });
  } catch (error) {
    res.status(400).json({
      success: false,

      error: err.message,
    });
  }
};

authorController.deleteAuthor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const selectedAuthor = await Author.findByIdAndDelete(id);
    res.status(200).json({
      success: true,

      data: selectedAuthor,

      message: `Deleted author ${selectedAuthor.name}`,
    });
  } catch (error) {
    res.status(400).json({
      success: false,

      error: err.message,
    });
  }
};
module.exports = authorController;
