const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json())             
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles:true
}))

const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.json({msg:"This is Example"})
})

app.listen(PORT,() => {
    console.log("SERVER IS RUNNING ...")
})

//Routes 
app.use('/user',require('./routes/userRouter'))
app.use('/api',require('./routes/categoryRouter'))
app.use('/api',require('./routes/upload'))
app.use('/api',require('./routes/productRouter'))


//connect mongoDB

const URI = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/e-commerce';


mongoose.connect(URI,{
    //useNewUrlParser:true,
    
}).then(()=>{
    console.log("MongoDB Connected")
}).catch(err => {
    console.log(err)
})
