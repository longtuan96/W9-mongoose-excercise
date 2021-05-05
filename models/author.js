const mongoose = require("mongoose");

const authorSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "the author name cannot be blank"],
    trim: true,
  },
});
const Author = mongoose.model("Author", authorSchema);

module.exports = Author;
