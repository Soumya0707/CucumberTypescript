var{After , Before} = require('cucumber');
import {After,Before,Status} from "cucumber";
import { browser } from "protractor";


// before calculating browser should maximize
Before({tags : "@calculatorTesting1"}, function()
{
    // This hook will be executed before scenario tagged with @foo and @bar
    browser.manage().window().maximize();
})
After({tags :"@calculatorTesting1"}, function(){
    // actions performed after scenario
    console.log("Test completed !!! ");
})

Before({tags : "@angularHomepageTesting"}, function()
{
    // This hook will be executed before scenario tagged with @foo and @bar
    console.log("I need to execute first");
})
/*
After({tags :"@angularHomepageTesting"}, function(){
    // actions performed after scenario
    console.log("Test completed !!! ");
})
*/

// demonstration of capturing ss of test failures

After(async function(scenario){
    // This hook will be executed when testcase fails 
    console.log("Test is completed");
    if(scenario.result.status === Status.FAILED)
    {
        // code to take ss
        const screenshot = await browser.takeScreenshot();
        this.attach(screenshot);
    }
}) ;









