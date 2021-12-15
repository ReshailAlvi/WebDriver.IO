const demoPage = require('../pageobjects/demo.page');
const data = require('../testdata/demo-data')

describe('Test table sort and search page',  () => {
    
    it('Navigate to the demo page and verify url', async () => {
        demoPage.open(data.demoPagePath)
        await expect(browser).toHaveUrl(data.baseUrl+data.demoPagePath) 
    });

    it('Search using office name as filter', async()=>{
        await demoPage.typeInSearchBox(data.officeName)
    })

    it('Validate the table was filtered according to our search', async () => {
        const listOfOffices = await demoPage.getColumnValues();
        await expect(listOfOffices).toBeElementsArrayOfSize({gte:1}) // to make sure the search gave back results
        for(let i=0; i<listOfOffices.length;i++){
            await expect(listOfOffices[i]).toHaveText(data.officeName) // to check if the search filtered the office name correctly
        }
    });
});


