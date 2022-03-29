const { studentControllers } = require("../controllers");

const router = require("express").Router();

router.get("/", studentControllers.getStudents)
router.post("/", studentControllers.createStudent)
router.patch("/:id", studentControllers.editStudentById)
router.delete("/:id", studentControllers.deleteStudentById)

module.exports = router