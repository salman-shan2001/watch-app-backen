// importing express, mongoose and cors
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { watchmodel } = require("./module/watch")

// add mogoose link
mongoose.connect("mongodb+srv://salmanshan:salman642001@cluster0.odxej1b.mongodb.net/watchDB?retryWrites=true&w=majority&appName=Cluster0")

// express  assigned to variable app
const app = express()
app.use(cors())
app.use(express.json())     // converted to json

//creating add API
app.post("/",
    (req, res) => {
        const input = req.body
        const watch = new watchmodel(input)
        console.log(watch)
        watch.save()
        res.json({ "status": "success" })
    }
)


//creating View API

app.post("/view", (req, res) => {
    watchmodel.find().then(
        (data) => { res.json(data) }
    ).catch()
})

//creating search API

app.post("/search", (req, res) => {
    const input=req.body
    watchmodel.find(input).then(
        (data)=>{res.json(data)}
    ).catch(
        (error)=>{res.json(error)}
    )
})

//creating delete API

app.post("/delete",(req,res)=>{
    let input=req.body
    watchmodel.findByIdAndDelete(input._id).then(
        (response)=>{res.json({"status":"success"})}
    ).catch(
        (response)=>{res.json({"status":"error"})}
    )
})


app.listen(1002, () => {
    console.log("server started")
})