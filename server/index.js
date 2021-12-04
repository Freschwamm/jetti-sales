const express = require('express')

const app = express()
const port = 3000


//defining routes - $app ->get

app.get('/', (request, response) => {
    response.send('Hello World')
})


// starting the server on port 3000
app.listen(port)