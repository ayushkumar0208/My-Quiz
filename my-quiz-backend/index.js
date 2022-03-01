const dotenv = require('dotenv');
const express = require('express');
var cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

dotenv.config({
    path:'./config.env'
})
require('./DB/connection');
app.use(require('./router/auth'))

app.listen(5000, () => {
    console.log("APP IS LISTENING ON PORT 5000!");
});