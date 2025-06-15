const express=require('express')

const app=express()

app.get("/health",(req,res)=>{
    console.log("app is running ")
})

app.listen(5000,()=>{
    console.log("app is running on 5000 ")
})