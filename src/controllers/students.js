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
  addStudentToClass: async (req, res, next) => {
    try {
      const { studentId } = req.params;
      const { class_id } = req.body;

      const findStudentSQL = `
        SELECT * FROM class_student WHERE student_id = ? AND class_id = ?
        `
      const replacements = [studentId, class_id]

      const findStudents = await query(findStudentSQL, replacements)

      if (findStudents.length) {
        return res.status(400).json({
          message: "Student has already joined the class"
        })
      }

      const sql = `INSERT INTO class_student VALUES (0, ?, ?)`

      await query(sql, replacements)

      return res.status(201).json({
        message: `Added student to class`
      })

    } catch (err) {
      next();
    }
  },
  addStudentToClub: async (req, res, next) => {
    try {
      const { studentId } = req.params;
      const { club_id } = req.body;

      const findStudentSQL = `
        SELECT * FROM club_student WHERE student_id = ? AND club_id = ?
        `
      const replacements = [studentId, club_id]

      const findStudents = await query(findStudentSQL, replacements)

      if (findStudents.length) {
        return res.status(400).json({
          message: "Student has already joined the club"
        })
      }

      const sql = `INSERT INTO club_student VALUES (0, ?, ?)`

      await query(sql, replacements)

      return res.status(201).json({
        message: `Added student to club`
      })

    } catch (err) {
      next()
    }
  }
}

module.exports = studentControllers