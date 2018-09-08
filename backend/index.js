require('express-async-errors');

const express = require('express');
var cors = require('cors')
const app = express();

app.use(cors());

require('./startup/db')();
require('./startup/routes')(app);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Chat Beauté on port ${port}...`));

