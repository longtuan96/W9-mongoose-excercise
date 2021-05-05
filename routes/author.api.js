const express = require("express");
const router = express.Router();
const authorController = require("../controllers/authorController");

/**
 * @POST
 * create new author in database
 */

router.post("/", authorController.createData);
/**
 * @GET
 * get all author
 */
router.get("/", authorController.getAuthor);
/**
 * @GET
 * get a selected author
 */
router.get("/:id", authorController.getSingleAuthor);
/**
 * @PUT
 * Update author information
 */
router.put("/:id", authorController.updateAuthor);
/**
 * @DELETE
 * delete an author
 */
router.delete("/:id", authorController.deleteAuthor);

module.exports = router;
