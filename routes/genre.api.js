const express = require("express");
const genreController = require("../controllers/genreController");
const router = express.Router();
/**
 * @POST
 * create new genre
 */
router.post("/", genreController.createGenre);
/**
 * @GET
 * get all genres
 */
router.get("/", genreController.getGenre);
/**
 * @GET
 * get single genre
 */
router.get("/:id", genreController.getGenre);
/**
 * @PUT
 * update genre
 */

/**
 * @DELETE
 * delete genre
 */

module.exports = router;
