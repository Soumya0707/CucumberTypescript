import {browser} from "protractor";
import{element,by} from "protractor";
import {async} from "q";
import { calculator } from "./PageObjectsModels/calculator";

describe('protractor element demo', ()=>{
    
    it('Locators',async() =>{
        let calc = new calculator();
        //browser.length('https://angularjs.org');
       await browser.get('http://juliemr.github.io/protractor-demo/');
        // repeater, chain locator, and css for identical tags
        //await element(by.model("first")).sendKeys("5");

        await calc.firstEditbox.sendKeys("20");
    // await element(by.model("second")).sendKeys("7");
        await calc.secondEditbox.sendKeys("50");
    // await element(by.id("gobutton")).click();
        await calc.go.click();

        /*
        element(by.repeater("result in memory")).element(by.css("td:nth-child(1)")).getText().then(function(text){
            browser.sleep(2000);
            console.log(text);
        })
        */
        calc.getResult.getText().then(function(text)
        {
           console.log(text); 
        })
        
        /*
        element(by.repeater("result in memory")).element(by.css("td:nth-child(2)")).getText().then(function(text){
            browser.sleep(2000);
            console.log(text);
        })
        element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text){
            browser.sleep(2000);
            console.log(text);
        
        })
        */

    })
 
    

})
