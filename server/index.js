const express = require('express')
const router = require('./router/router.js')
const app = express()
const port = 4000
const cors = require('cors')



app.use(express.json())
app.use(cors())


router(app)


app.listen(port)