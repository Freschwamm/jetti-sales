const express = require('express')
const router = require('./router/')
const bodyParser = require("body-parser");
const app = express()
const port = 3000


app.use(bodyParser.json());
app.use(express.json())


router(app)


app.listen(port)