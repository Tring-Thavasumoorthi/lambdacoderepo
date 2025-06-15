const express=require('express')

const app=express()


app.get("/health",(req,res)=>{
    console.log("health are passed")
      res.json({message:"health are passed"})
})

app.listen(3000,()=>{
    console.log("app is running on 3000 ")
})