const router = require("express").Router();
const controller = require("./notes.controller");

router
  .route("/:noteId")
  .get(controller.read);

router
  .route("/")
  .get(controller.read)
  .post(controller.create);

module.exports = router;
