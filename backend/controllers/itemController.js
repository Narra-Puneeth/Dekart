const Item =require('../models/useListAnItem')

const listItem = async(req,res)=>{
    
    const {name,description,category,startPrice,condition,phone,city,pincode,address}=req.body

    try{
        const item = await Item.list(name,description,category,startPrice,condition,phone,city,pincode,address)
        res.status(200).json({Response:"item listed"})
    }catch(error){
        res.status(400).json({error:error.message})
    }
    
}

module.exports={listItem}
