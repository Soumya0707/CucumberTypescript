//import { ConsoleReporter } from "jasmine";
import {Config } from "protractor";
//import * as reporter from "cucumber-html-reporter";
var reporter = require('cucumber-html-reporter');



// An example configuration file
export let config:Config  = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
  // connecting directly without starting selenium server
    directConnect : true,
    framework : 'custom',
    frameworkPath : require.resolve('protractor-cucumber-framework'),
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome'
    },

  
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../featuresCucum/demo.feature'],
    cucumberOpts :{
      //require step defination

      //tags :"@angularHomepageTesting",
      format : 'json:./cucumberReport.json',
      
      require :[
        './StepDefinationsCucum/*.js',
      ]
    },
    onComplete: () => {
      var options = {
          theme: 'bootstrap',
          jsonFile: './cucumberreport.json',
          output: './cucumber_report.html',
          reportSuiteAsScenarios: true,
          launchReport: true,
          metadata: {
              "App Version": "0.3.2",
              "Test Environment": "STAGING",
              "Browser": "Chrome  90.0.4430.72",
              "Platform": "Windows 10",
              "Parallel": "Scenarios",
              "Executed": "Remote"
          }
      };
      reporter.generate(options);
  }
    
  };