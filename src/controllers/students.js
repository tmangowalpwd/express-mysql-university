const { query } = require("../database")

const studentControllers = {
  getStudents: async (req, res, next) => {
    try {
      const sql = `SELECT * FROM students;`

      const dbResult = await query(sql);

      return res.status(200).json({
        message: "Find students",
        result: dbResult
      })
    } catch (err) {
      next()
    }
  },
  createStudent: async (req, res, next) => {
    try {
      const { student_name, faculty_id } = req.body

      const sql = `INSERT INTO students VALUES (0, ?, ?)`

      const replacements = [student_name, faculty_id];

      await query(sql, replacements);

      return res.status(201).json({
        message: "Created student"
      })
    } catch (err) {
      next()
    }
  },
  editStudentById: async (req, res, next) => { },
  deleteStudentById: async (req, res, next) => {
    try {
      const { id } = req.params

      const sql = `DELETE FROM students WHERE id = ?`

      await query(sql, [id])

      return res.status(200).json({
        message: "Deleted student"
      })
    } catch (err) {
      next()
    }
  },
}

module.exports = studentControllers