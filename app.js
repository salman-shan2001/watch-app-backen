// importing express, mongoose and cors
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { watchmodel } = require("./module/watch")

// add mogoose link
mongoose.connect("mongodb+srv://salmanshan:salman642001@cluster0.odxej1b.mongodb.net/watchDB?retryWrites=true&w=majority&appName=Cluster0")


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


app.post("/view", (req, res) => {
    watchmodel.find().then(
        (data) => { res.json(data) }
    ).catch()
})

app.listen(1002, () => {
    console.log("server started")
})