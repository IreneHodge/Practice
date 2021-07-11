const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
// app.use(bodyParser.json())

const port = 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/", (req, res) => {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var bmi = (weight/(Math.pow(height, 2))) * 703
    res.send("Your BMI is " + bmi)
})

app.listen(port, () => {
    console.log('You are connected')
})