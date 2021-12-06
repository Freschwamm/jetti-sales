const express = require('express')
const router = require('./router/')
const bodyParser = require("body-parser");
const app = express()
const port = 4000
const cors = require('cors')


app.use(bodyParser.json());
app.use(express.json())
app.use(cors())


router(app)


app.listen(port)