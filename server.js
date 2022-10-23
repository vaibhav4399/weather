const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname+'/dist/weather'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + "/dist/weather/index.html");
});

app.listen(process.env.PORT || 8080, () => {
    console.log("Weather App is online successfully")
});
