const mongoose=require('mongoose')
// import { useAuthContext } from 'C:/Users/narra/Documents/LOGIN/Marketplace/frontend/src/hooks/useAuthContext.js'

// const { user } = useAuthContext()

const Schema =mongoose.Schema

const itemSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    startPrice:{
        type:Number,
        required:true
    },
    condition:{
        type:String,
        required:false
    },
    phone:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },

},{timestamps:true})

itemSchema.statics.list = async function(name,description,category,startPrice,condition,phone,city,pincode,address){

    const item = await this.create({name,description,category,startPrice,condition,phone,city,pincode,address})

    return item
}

module.exports=mongoose.model('items',itemSchema) 