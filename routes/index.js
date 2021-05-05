const express = require("express");
const router = express.Router();
const authorApi = require("./author.api");
const bookApi = require("./book.api");
const genreApi = require("./genre.api");
router.use("/authors", authorApi);
router.use("/books", bookApi);
router.use("/genres", genreApi);
module.exports = router;
