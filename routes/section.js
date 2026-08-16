const express = require("express");
const router = express.Router({ mergeParams: true });
const controller = require("../controllers/sectionsController");

router.get("/", controller.getSections);
router.post("/", controller.createSection);
router.get("/:id", controller.getSectionById);
router.patch("/:id", controller.updateSection);
router.delete("/:id", controller.deleteSection);
router.use("/:sectionId/items", require("./sectionItems"));

module.exports = router;
