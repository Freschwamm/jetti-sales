const fetch = require ("node-fetch");
const cors = require('cors')
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
}


function router(app) {
    app.get('/', cors(corsOptions) ,async (request, response) => {
        const jettiUrl = "https://api.jetti.io/api/sales.json?access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MjcyOS1mcmFuY2VzY28uZGVsb3JlbnppLmJhK2pldHRpQGdtYWlsLmNvbS1hcGktMA.36ACNOdySaFH23F3S7UIPuwwh8IBc1yJudBentLKTEg";
        const fetch_response = await fetch(jettiUrl)
        const json = await fetch_response.json()
        response.json(json)
    })
}

module.exports = router