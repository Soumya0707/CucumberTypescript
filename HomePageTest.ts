import {browser} from "protractor";
import{element,by} from "protractor";
import {async} from "q";
import { angularHomePage } from "./PageObjectsModels/angularHomePage";

describe("Angular Home page demo", async()=>{

    it('Angular Page title validation', async()=>
    {
        let ahp = new angularHomePage(); 
        await browser.get("https://angularjs.org/");
        await ahp.angularLink.click();
        browser.sleep(2000);
        await ahp.search.sendKeys("Cucumber");
    })
})