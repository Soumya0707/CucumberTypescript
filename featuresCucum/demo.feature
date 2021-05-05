Feature: Iam going to validate my website calculator app
@calculatorTesting1
Scenario: Calculator Add functionalities testing
Given I will navigate to calculator site
When I add two number "10" and "30"
Then The output displayed should be "40"
@calculatorTesting2
Scenario Outline: Calculator Add functionalities testing
#Given I will navigate to calculator site .... passing it as parameter
Given I will navigate to "calc" site
When I add two number "<key1>" and "<key2>"
Then The output displayed should be "<res>"
Examples:
    | key1 | key2 | res |
    | 55  | 25  | 80  |
    |108 | 62  | 170 |



#Scenario: Angular websites functionalities testing

#Given I will navigate to "AngularJS" site
#When clicked on header link 
#And you will navigate to angular page
#Then you will enter "cucumber" in search box



#we cannot create entire scenario for each data so,
#running testcase for multiple data we can use scenario outline helps to parameterized with multiple values
@angularHomepageTesting
Scenario Outline: Angular websites functionalities testing

Given I will navigate to "AngularJS" site
When clicked on header link 
And you will navigate to angular page
Then you will enter "<key>" in search box
# to define parameters value we used key
Examples:
    | key | 
    |Hello | 
    |Hey  |  










