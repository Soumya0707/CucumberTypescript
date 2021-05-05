"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const calculator_1 = require("./PageObjectsModels/calculator");
describe('protractor element demo', () => {
    it('Locators', () => __awaiter(void 0, void 0, void 0, function* () {
        let calc = new calculator_1.calculator();
        //browser.length('https://angularjs.org');
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        // repeater, chain locator, and css for identical tags
        //await element(by.model("first")).sendKeys("5");
        yield calc.firstEditbox.sendKeys("20");
        // await element(by.model("second")).sendKeys("7");
        yield calc.secondEditbox.sendKeys("50");
        // await element(by.id("gobutton")).click();
        yield calc.go.click();
        /*
        element(by.repeater("result in memory")).element(by.css("td:nth-child(1)")).getText().then(function(text){
            browser.sleep(2000);
            console.log(text);
        })
        */
        calc.getResult.getText().then(function (text) {
            console.log(text);
        });
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
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFtQztBQUduQywrREFBNEQ7QUFFNUQsUUFBUSxDQUFDLHlCQUF5QixFQUFFLEdBQUUsRUFBRTtJQUVwQyxFQUFFLENBQUMsVUFBVSxFQUFDLEdBQVEsRUFBRTtRQUNwQixJQUFJLElBQUksR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztRQUM1QiwwQ0FBMEM7UUFDM0MsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1FBQzlELHNEQUFzRDtRQUN0RCxpREFBaUQ7UUFFakQsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxtREFBbUQ7UUFDL0MsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1Qyw0Q0FBNEM7UUFDeEMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXRCOzs7OztVQUtFO1FBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1lBRXhDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUE7UUFFRjs7Ozs7Ozs7OztVQVVFO0lBRU4sQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUlOLENBQUMsQ0FBQyxDQUFBIn0=