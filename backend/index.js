
require('./startup/db')();

const express = require('express');
const app = express();


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Chat Beauté on port ${port}...`));

