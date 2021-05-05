const express = require("express");
const bookController = require("../controllers/bookController");
const router = express.Router();
/**
 * @POST
 * create new book
 */
router.post("/", bookController.createBook);
/**
 * @GET
 * get all books
 */
router.get("/", bookController.getBooks);
module.exports = router;
