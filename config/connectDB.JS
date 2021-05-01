const mongoose=require('mongoose')
require('dotenv').config({path:'./config/.env'})



const connectDB=async()=>{
   try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true , useUnifiedTopology: true , usecreateIndexes  : true})
        console.log('the database is connected')
   } catch (error) {
       console.log('the database is not connected')
       
   }
}
module.exports=connectDB