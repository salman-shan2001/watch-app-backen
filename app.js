const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { watchmodel } = require("./module/watch")


const app = express()
app.use(cors())
app.use(express.json())

app.post("/",
    (req, res) => {
        const input = req.body
        const watch = new watchmodel(input)
        console.log(watch)
        watch.save()
        res.json({ "status": "success" })
    }
)

app.listen(1002, () => {
    console.log("server started")
})