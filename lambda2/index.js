const express=require('express')

const app=express()


console.log("Lambda2 is second lambda function")

app.listen(3000,()=>{
    console.log("app is running on 3000 ")
})