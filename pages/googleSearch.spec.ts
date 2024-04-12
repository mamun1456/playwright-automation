import { sleep } from 'wd/lib/commands';
import {url} from '../data/login.json';
import {expect} from '@playwright/test';

export const GoogleSearch = class GoogleSearch {

    page: any
    staySignedOut:any
    searchBox: any
    searchGlass: any
    edgeWaterLink: any
    edgeWaterLogo: any
    popup: any
    waterEdgeMarketLink: any

    constructor(page){
        this.page = page;
        this.staySignedOut = page.frameLocator('iframe[name="callout"]').getByRole('button', { name: 'Stay signed out' });
        this.searchBox = page.locator('//textarea[@aria-label="Search"]');
        this.popup = page.getByRole('button', { name: 'Not now' });
        this.waterEdgeMarketLink = page.getByRole('link', { name: 'Edgewater Markets: Home Edgewater Markets https://www.edgewatermarkets.com' });
      
    }


    async goToGoogleHomePage(searchInput: String){
        await this.page.goto(url);
        await this.staySignedOut.click();
        await this.searchBox.click();
        await this.searchBox.fill(searchInput);
        await this.searchBox.press('Enter');
        sleep(5000);
        await this.waterEdgeMarketLink.click();
    }

}
