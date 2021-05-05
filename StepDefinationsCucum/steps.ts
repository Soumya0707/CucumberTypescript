import {Given} from "cucumber";
import {When, Then} from "cucumber";
import { calculator } from "../PageObjectsModels/calculator";
import {async} from "q";
import chai from "chai";
import { browser } from "protractor";
import { angularHomePage } from "../PageObjectsModels/angularHomePage";
let calc = new calculator();
let ahp = new angularHomePage(); 
var expect = chai.expect

// Scenario 1: Calculator websit 

Given('I will navigate to calculator site', async()=> {
    // Write code here that turns the phrase above into concrete actions
    await browser.get("http://juliemr.github.io/protractor-demo/");
  });

  Given('I will navigate to {string} site', async(string)=> {
    // Write code here that turns the phrase above into concrete actions
    if(string=="calc")
    {
        await browser.get("http://juliemr.github.io/protractor-demo/"); 
    }
    // link for 2nd scenario
    else if(string=="AngularJS")
    {
        await browser.get("https://angularjs.org/");
    }
  });

When('I add two number {string} and {string}', async(string, string2)=>{
    // Write code here that turns the phrase above into concrete actions
    
    await calc.firstEditbox.sendKeys(string);
    await calc.secondEditbox.sendKeys(string2);
  });

Then('The output displayed should be {string}', async(string)=> {  
    // Write code here that turns the phrase above into concrete actions
    await calc.go.click();
    await calc.getResult.getText().then(function(text)
    { // validation
        expect(text).to.equal(string);
    })
  });

// Scenario 2: Angular Website 

When('clicked on header link', async()=> {
    // Write code here that turns the phrase above into concrete actions
    await ahp.angularLink.click();
  });

When('you will navigate to angular page', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("Navigated to new Page");
    // check wheather navigated to next page or not
  });
Then('you will enter {string} in search box', async(string)=>{    
    // Write code here that turns the phrase above into concrete actions
    await browser.sleep(3000);
    await ahp.search.sendKeys(string);
  });



