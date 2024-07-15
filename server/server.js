import express from 'express'
import dotenv from 'dotenv'
import { dbConnect } from "./config/dbConnect.js"
import cors from 'cors'
import {product} from "./schema/product.js"



dotenv.config();
const app = express();
const PORT = parseInt(process.env.PORT || '8888', 10) 



app.use(express.json());
app.use(cors({
    origin: "*",
}))

app.post('/route', async(req, res)=>{
   try{
    const {query} = req.body; 
    const products = await product.find({ product_name: { $regex: new RegExp(query, 'i') } }).limit(40);
    console.log(products);
    res.json(products);
   } catch(e){
    res.status(500).json({success: false})
   }
})


dbConnect();

app.listen(PORT, ()=>{
    console.log(`server started sucessfully at PORT  ${PORT}`);
})