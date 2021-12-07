const salesJsonData = require('../salesJsonData/salesJsonData')

it('returns the title of the first album', async () => {
    const title = await salesJsonData();  // Run the function
    expect(title[0].billingFullName).toEqual('Test Customer');  // Make an assertion on the result
});

