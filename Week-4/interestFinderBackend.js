// authentication using middlewares


const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

function calculateInterest(principal,rate,time){

    const interest = (principal*rate*time)/100;
    const total = principal+interest;

    return {"total":total, "interest":interest};
}

app.get("/interestCalculator", (req, res)=>{
    const principal = parseInt(req.query.principal);
    const rate = parseInt(req.query.rate);
    const time = parseInt(req.query.time);
    
    const Result = calculateInterest(principal,rate,time);
    res.status(200).json(Result)
})

app.get("/sum",(req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b); 
    const sum = a+b;
    res.send(sum.toString());
})

app.use((req,res)=>{
    res.status(404).json({msg:"Page not found"});
})

app.use((err,req,res,next)=>{
    res.send(404).json({error:err});
})

app.listen(3000)