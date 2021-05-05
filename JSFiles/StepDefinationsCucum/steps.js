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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const cucumber_2 = require("cucumber");
const calculator_1 = require("../PageObjectsModels/calculator");
const chai_1 = __importDefault(require("chai"));
const protractor_1 = require("protractor");
const angularHomePage_1 = require("../PageObjectsModels/angularHomePage");
let calc = new calculator_1.calculator();
let ahp = new angularHomePage_1.angularHomePage();
var expect = chai_1.default.expect;
// Scenario 1: Calculator websit 
cucumber_1.Given('I will navigate to calculator site', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.get("http://juliemr.github.io/protractor-demo/");
}));
cucumber_1.Given('I will navigate to {string} site', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    if (string == "calc") {
        yield protractor_1.browser.get("http://juliemr.github.io/protractor-demo/");
    }
    // link for 2nd scenario
    else if (string == "AngularJS") {
        yield protractor_1.browser.get("https://angularjs.org/");
    }
}));
cucumber_2.When('I add two number {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield calc.firstEditbox.sendKeys(string);
    yield calc.secondEditbox.sendKeys(string2);
}));
cucumber_2.Then('The output displayed should be {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield calc.go.click();
    yield calc.getResult.getText().then(function (text) {
        expect(text).to.equal(string);
    });
}));
// Scenario 2: Angular Website 
cucumber_2.When('clicked on header link', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield ahp.angularLink.click();
}));
cucumber_2.When('you will navigate to angular page', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("Navigated to new Page");
    // check wheather navigated to next page or not
});
cucumber_2.Then('you will enter {string} in search box', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.sleep(3000);
    yield ahp.search.sendKeys(string);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmaW5hdGlvbnNDdWN1bS9zdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUErQjtBQUMvQix1Q0FBb0M7QUFDcEMsZ0VBQTZEO0FBRTdELGdEQUF3QjtBQUN4QiwyQ0FBcUM7QUFDckMsMEVBQXVFO0FBQ3ZFLElBQUksSUFBSSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0FBQzVCLElBQUksR0FBRyxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO0FBQ2hDLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUE7QUFFeEIsaUNBQWlDO0FBRWpDLGdCQUFLLENBQUMsb0NBQW9DLEVBQUUsR0FBTyxFQUFFO0lBQ2pELG9FQUFvRTtJQUNwRSxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7QUFDakUsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGdCQUFLLENBQUMsa0NBQWtDLEVBQUUsQ0FBTSxNQUFNLEVBQUMsRUFBRTtJQUN2RCxvRUFBb0U7SUFDcEUsSUFBRyxNQUFNLElBQUUsTUFBTSxFQUNqQjtRQUNJLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztLQUNsRTtJQUNELHdCQUF3QjtTQUNuQixJQUFHLE1BQU0sSUFBRSxXQUFXLEVBQzNCO1FBQ0ksTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0tBQy9DO0FBQ0gsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVMLGVBQUksQ0FBQyx3Q0FBd0MsRUFBRSxDQUFNLE1BQU0sRUFBRSxPQUFPLEVBQUMsRUFBRTtJQUNuRSxvRUFBb0U7SUFFcEUsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFTCxlQUFJLENBQUMseUNBQXlDLEVBQUUsQ0FBTSxNQUFNLEVBQUMsRUFBRTtJQUMzRCxvRUFBb0U7SUFDcEUsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3RCLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1FBRTdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVMLCtCQUErQjtBQUUvQixlQUFJLENBQUMsd0JBQXdCLEVBQUUsR0FBTyxFQUFFO0lBQ3BDLG9FQUFvRTtJQUNwRSxNQUFNLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDaEMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVMLGVBQUksQ0FBQyxtQ0FBbUMsRUFBRTtJQUN0QyxvRUFBb0U7SUFDcEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ3JDLCtDQUErQztBQUNqRCxDQUFDLENBQUMsQ0FBQztBQUNMLGVBQUksQ0FBQyx1Q0FBdUMsRUFBRSxDQUFNLE1BQU0sRUFBQyxFQUFFO0lBQ3pELG9FQUFvRTtJQUNwRSxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEMsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9