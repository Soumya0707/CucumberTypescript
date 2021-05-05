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
var { After, Before } = require('cucumber');
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
// before calculating browser should maximize
Before({ tags: "@calculatorTesting1" }, function () {
    // This hook will be executed before scenario tagged with @foo and @bar
    protractor_1.browser.manage().window().maximize();
});
After({ tags: "@calculatorTesting1" }, function () {
    // actions performed after scenario
    console.log("Test completed !!! ");
});
Before({ tags: "@angularHomepageTesting" }, function () {
    // This hook will be executed before scenario tagged with @foo and @bar
    console.log("I need to execute first");
});
/*
After({tags :"@angularHomepageTesting"}, function(){
    // actions performed after scenario
    console.log("Test completed !!! ");
})
*/
// demonstration of capturing ss of test failures
After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        // This hook will be executed when testcase fails 
        console.log("Test is completed");
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            // code to take ss
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot);
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmaW5hdGlvbnNDdWN1bS9ob29rcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLElBQUcsRUFBQyxLQUFLLEVBQUcsTUFBTSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzFDLHVDQUE2QztBQUM3QywyQ0FBcUM7QUFHckMsNkNBQTZDO0FBQzdDLE1BQU0sQ0FBQyxFQUFDLElBQUksRUFBRyxxQkFBcUIsRUFBQyxFQUFFO0lBRW5DLHVFQUF1RTtJQUN2RSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3pDLENBQUMsQ0FBQyxDQUFBO0FBQ0YsS0FBSyxDQUFDLEVBQUMsSUFBSSxFQUFFLHFCQUFxQixFQUFDLEVBQUU7SUFDakMsbUNBQW1DO0lBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUN2QyxDQUFDLENBQUMsQ0FBQTtBQUVGLE1BQU0sQ0FBQyxFQUFDLElBQUksRUFBRyx5QkFBeUIsRUFBQyxFQUFFO0lBRXZDLHVFQUF1RTtJQUN2RSxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7QUFDM0MsQ0FBQyxDQUFDLENBQUE7QUFDRjs7Ozs7RUFLRTtBQUVGLGlEQUFpRDtBQUVqRCxLQUFLLENBQUMsVUFBZSxRQUFROztRQUN6QixrREFBa0Q7UUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2pDLElBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssaUJBQU0sQ0FBQyxNQUFNLEVBQzNDO1lBQ0ksa0JBQWtCO1lBQ2xCLE1BQU0sVUFBVSxHQUFHLE1BQU0sb0JBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzNCO0lBQ0wsQ0FBQztDQUFBLENBQUMsQ0FBRSJ9