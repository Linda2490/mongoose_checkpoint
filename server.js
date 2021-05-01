const express=require ('express')
const app = express()
const connectDB=require('./config/connectDB')
const ContactRouter=require('./routes/contact')






app.use(express.json())
connectDB()
app.use('/api/contacts', ContactRouter)
const port = 5000
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
}
)