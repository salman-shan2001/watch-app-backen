const mongoose=require("mongoose")
const Schema=mongoose.Schema(
    {
        "company":String,
        "prize":String,
        "material":String,
        "headquaters":String,
        "image":String
        
    
    }
)

const watchmodel=mongoose.model("watches",Schema);
module.exports={watchmodel}