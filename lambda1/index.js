const express=require('express')

const app=express()

console.log(("this is the lambda1 folder "))


app.listen(5000,()=>{
    console.log("app is running on 5000 ")
})