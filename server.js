const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('./dist/weather'));

app.get('/*', (req, res) => {
    res.sendFile(`index.html`, { root: 'dist/weather' });
});

app.listen(port, () => {
    console.log("Weather App is online successfully")
});
