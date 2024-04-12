import {expect} from '@playwright/test';
import { sleep } from 'wd/lib/commands';

export const WaterEdgePage = class WaterEdgePage {

    page: any
    edgeWaterSlogan: any

    constructor(page){
        this.page = page;
        this.edgeWaterSlogan = page.locator('//h1[text()="The Future of Fx Trading"]');
        
    }

    async searchWaterEdgeMarket (){
        const companyName = await this.edgeWaterSlogan.innerText();
        expect(companyName).toEqual(expect.stringContaining('THE FUTURE OF FX TRADING'));
    }
}
