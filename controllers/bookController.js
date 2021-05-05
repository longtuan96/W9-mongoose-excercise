const Book = require("../models/book");

const bookController = {};
bookController.createBook = async (req, res, next) => {
  try {
    const { title, description, author, genres } = req.body;
    const newBook = new Book({ title, description, author, genres });
    await newBook.save();
    res.status(200).json({
      status: "success",
      data: newBook,
      message: `Book ${newBook.title} created!`,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message,
    });
  }
};

bookController.getBooks = async (req, res, next) => {
  try {
    const books = await Book.find({})

      .populate("author")

      .populate("genres", "-_id -__v");
    res.status(200).json({
      status: "success",
      data: books,
      message: `Books are listed!`,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message,
    });
  }
};
module.exports = bookController;
