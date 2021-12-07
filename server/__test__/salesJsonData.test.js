const salesJsonData = require('../salesJsonData/salesJsonData.js')


it('returns the billing full name of the first sale', async () => {
    const arrayOfSalesObjects = await salesJsonData();  // Run the function
    expect(arrayOfSalesObjects[0].id).toEqual(3536888);  // Make an assertion on the result
});


