const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")

dotenv.config()

const app = express()

const PORT = process.env.PORT

app.get("/", (req, res) => {
  res.send("University API")
})

app.listen(PORT, () => {
  console.log("Listening in port", PORT)
})