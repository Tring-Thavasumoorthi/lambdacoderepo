const express=require('express')

const app=express()


app.get("/health",(req,res)=>{
      res.json({message:"health are passed"})
})


app.listen(5000,()=>{
    console.log("app is running on 5000 ")
})