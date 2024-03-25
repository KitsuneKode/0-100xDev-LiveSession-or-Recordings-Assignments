// * 2. Calculate the average time taken by the server to handle requests.



const express = require('express');

const app = express();

let startTime = 0;
let count = 0;
let totalTimeTaken = 0;

function timeStart(req, res, next){
    startTime = new Date().getTime();
    count++;
    next();
}

function timeCount(req, res, next){
        const endTime = Date.now();
        const timeTaken = endTime - startTime;
        totalTimeTaken += timeTaken;
        console.log(`Average time taken: ${totalTimeTaken / count} ms`);
    next();
}

function userAuthentication(req, res, next){
    const username = req.headers.username;
    const password = req.headers.password;
    console.log(username)

    if(username != "manash" || password != "123ind"){
        res.status(404).json({'msg': 'Wrong input'})
    }
    else{
        next()
    }

}

function kidneyIdCheck(req, res, next){
    const kidneyID = req.query.kidneyID;
    
    if(kidneyID != 1 && kidneyID != 2){
        res.status(404).json({'msg': 'Wrong kidney input'})
    }
    else{
        next()
    }
}
function heartConditionCheck(req, res, next){
    const heartCondition = req.params.heartCondition;
    console.log(heartCondition)
    
    if(heartCondition != "healthy" && heartCondition != "nothealthy"){
        res.status(404).json({'msg': 'wrong input for heart condition'})
    }
    else{
        next()
    }
}
app.use(timeStart);

app.get("/hospital/kidneyCheck", userAuthentication,kidneyIdCheck,timeCount, (req, res)=>{

    res.status(200).json({msg: "kidneys are fine"})
})

app.get("/hospital/heartCheck/:heartCondition", userAuthentication,heartConditionCheck,timeCount, (req, res)=>{

    res.status(200).json({msg: "heart is fine"})
})

app.put('/hospital/kidneyCheck', userAuthentication, kidneyIdCheck,timeCount, (req, res)=>{

    res.status(200).json({msg:"will do something"})
})

app.use((req , res)=>{
    res.json({msg:"No url found"})
})

app.listen(3000)