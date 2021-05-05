const mongoose = require("mongoose");
const Author = require("./author");
const bookSchema = mongoose.Schema({
  title: {
    type: String,

    required: [true, "title is required"],

    trim: true,
  },

  description: {
    type: String,

    required: [true, "description is required"],

    trim: true,
  },

  author: {
    type: mongoose.Schema.Types.ObjectId,

    ref: "Author",

    required: [true, "author is required"],
  },
  genres: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Genre",
    },
  ],
});

bookSchema.pre("save", async function (next) {
  // check the author is exist in system
  const checkAuthor = await Author.findById(this.author);
  if (checkAuthor) {
    next();
  } else {
    throw new Error("that author is not exist");
  }
});
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
