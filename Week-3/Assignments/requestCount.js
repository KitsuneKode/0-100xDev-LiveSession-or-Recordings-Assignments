/**
 * Counts the number of requests in an array.
 *
 * @param {Array} requests - The array of requests.
 * @returns {number} The number of requests.
 */


//dumb way of doing authentication


const express = require('express');

const app = express();

let count = 0;

function requestCount(req, res, next){
    count ++;
    console.log(count)
    next();    
}

app.use(requestCount)

app.get("/hospital", (req, res)=>{
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyID = req.query.kidneyID;

    console.log(kidneyID)
    if(username != "manash" || password != "123ind"){
        res.status(404).json({'msg': 'Wrong input'})
        return
    }

    if(kidneyID != 1 && kidneyID != 2){
        res.status(404).json({'msg': 'Wrong kidney input'})
        return
    }

    res.status(200).json({msg: "kidneys are fine"})

})

app.listen(3000)
