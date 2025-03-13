const express = require("express")

const app = express()

app.listen(3000,()=>{
  console.log("Server is runnig")
})

app.get("/",(req,res)=>{
  res.status(200).json({name:"hello node js"})
})