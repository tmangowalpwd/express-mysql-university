const { studentControllers } = require("../controllers");

const router = require("express").Router();

router.get("/", studentControllers.getStudents)
router.post("/", studentControllers.createStudent)
router.patch("/", studentControllers.editStudentById)
router.delete("/", studentControllers.deleteStudentById)

module.exports = router