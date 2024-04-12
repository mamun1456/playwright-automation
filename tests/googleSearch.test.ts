import {chromium, test, defineConfig} from "@playwright/test";
import {GoogleSearch} from '../pages/googleSearch.spec';
import {WaterEdgePage} from '../pages/waterEdgePage.spec';
import * as data from '../data/testData.json';

export default defineConfig({
    reporter: [['html', {outputFolder: './playwright-report'}]],
    fullyParallel: true,

})

test.describe('Validate google search', () => {
    test('search water edge market', async ({page})=> {

        test.setTimeout(60000);

        const search = new GoogleSearch(page);

        const waterEdgeHome = new WaterEdgePage(page);

        const browser = await chromium.launch({
            headless: true,
            args:['--start-maximized']

        })

        const context = await browser.newContext({
        })

        await context.tracing.start({screenshots: true, snapshots: true});
        await search.goToGoogleHomePage(data.searchInput);
        await page.waitForTimeout(5000);
        await waterEdgeHome.searchWaterEdgeMarket();
        await page.screenshot({path:'screenshot/waterEdgeHomePage.png', fullPage: false});
        await context.tracing.stop({path : 'trace.zip'})
        await browser.close();

    })

})


