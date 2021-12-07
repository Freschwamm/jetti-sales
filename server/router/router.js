
const getJettiSales = require("../salesJsonData/salesJsonData")
const cors = require('cors')
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
}


function router(app) {
    app.get('/', cors(corsOptions) , async (request, response) => {

        const salesData =  await getJettiSales()
       response.json(salesData)

    })
}

module.exports = router

