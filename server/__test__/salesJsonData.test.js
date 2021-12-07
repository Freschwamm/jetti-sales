const salesJsonData = require('../salesJsonData/salesJsonData.js')


it('returns the id of the first sale', async () => {
    const arrayOfSalesObjects = await salesJsonData();
    expect(arrayOfSalesObjects[0].id).toEqual(3536888);
});


