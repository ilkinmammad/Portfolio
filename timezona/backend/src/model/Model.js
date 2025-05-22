import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name:{type:String},
    price:{type:Number},
    image:{type:String},
    title:{type:String},
})

const product = mongoose.model("Product" , productSchema)

export default product