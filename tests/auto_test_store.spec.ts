
import {config} from "../config/config";

import * as testData from "../test_data/return_customer.json";

import { test } from "../fixtures/fixture";

import { footerLocators } from "../locators/footerLocators";

import { returningCustomerLocators } from "../locators/returningCustomerLocator";

//end to end  flow functional testing-scenario2 (done all 4 test cases) 

test.describe('automation_test_store_scenario2',()=>{
    {
    test.beforeEach(async({page, cartPage})=>{
        await page.goto(config.baseURL);
        await page.locator(footerLocators.footer).getByRole(footerLocators.login.role,{name:footerLocators.login.name}).click();
        await page.locator(returningCustomerLocators.loginName).fill(testData.loginName);
        await page.locator(returningCustomerLocators.password).fill(testData.password);
        await page.getByRole(returningCustomerLocators.loginButton.role,{name:returningCustomerLocators.loginButton.name}).click();
        await cartPage.clearCart();
        await page.goto(config.baseURL);
    });
    test.afterEach(async({page})=>{
        console.log("---test ended - successfully---");
        await page.locator(footerLocators.footer).getByRole(footerLocators.logoff.role,{name:footerLocators.logoff.name}).click();
    });


    test('s2_tc_01_user placing orders via categories and sub-categories',async({categories,subcategories,conditionerPage,cartPage,confirmOrderButton,page})=>{
         
        await categories.hairCare();
        await subcategories.conditioner();
        await conditionerPage.highlightingExpressionAddToCart();
        await conditionerPage.highlightingExpressionAddedToCart();
        await cartPage.clickOnCheckoutButton();
        await confirmOrderButton.verifyOrderConfirmation();


    });
    test('s2_tc002_user able to add product to cart',async ({categories,subcategories,conditionerPage,cartPage,page})=>{
        
        await categories.hairCare();
        await subcategories.conditioner();
        await conditionerPage.highlightingExpressionAddToCart();
        await conditionerPage.highlightingExpressionAddedToCart();  
        await cartPage.verifyCheckoutButtonIsVisible();
});
    test('s2_tc_003 quantity check on cart for same product added multiple times',async({categories,subcategories,conditionerPage,cartPage,page})=>{
        
        await categories.hairCare();
        await subcategories.conditioner();
        await conditionerPage.addPanteenClassicCareToCart();
        await conditionerPage.highlightingExpressionAddToCart();
        await conditionerPage.highlightingExpressionAddedToCart();
        await cartPage.verifyCartQuantity();
    });
    test('s2_tc_004 customise cart by removing  ',async({categories,subcategories,conditionerPage,cartPage,page})=>{
        
        await categories.hairCare();
        await subcategories.conditioner();
        await conditionerPage.addPanteenClassicCareToCart();
        await conditionerPage.highlightingExpressionAddToCart();
        await conditionerPage.highlightingExpressionAddedToCart();
        await cartPage.verifyCartTotalForConditioners();
        await cartPage.removeClassicCareFromCart();
        await cartPage.verifyCartTotalAfterRemovingClassicCare();
        });
    }
        
});


//end to end flow functional testing-scenario1 (done all 4 test cases)

test.describe('automation_test_store_scenario1',()=>{
    {
    test.beforeEach(async({page, cartPage})=>{
        await page.goto(config.baseURL);
        await page.locator(footerLocators.footer).getByRole(footerLocators.login.role,{name:footerLocators.login.name}).click();
        await page.locator(returningCustomerLocators.loginName).fill(testData.loginName);
        await page.locator(returningCustomerLocators.password).fill(testData.password);
        await page.getByRole(returningCustomerLocators.loginButton.role,{name:returningCustomerLocators.loginButton.name}).click();
        await page.goto(config.baseURL);
        await cartPage.clearCart();
    });
    test.afterEach(async({page})=>{
        console.log("---test ended - successfully---");
        await page.locator(footerLocators.footer).getByRole(footerLocators.logoff.role,{name:footerLocators.logoff.name}).click();
    });

    test('s1_tc_001 user purchasing product displayed in  homepage',async({homePage,cartPage,confirmOrderButton})=>{
        await homePage.navigateToHomePage();
        await homePage.clickOnBronzerStick();
        await homePage.clickOnBronzerStickAddedToCart();
        await cartPage.clickOnCheckoutButton();
        await confirmOrderButton.verifyOrderConfirmation();
    });
    test('s1_tc_002 user purchasing  same product more than one time',async({homePage,cartPage,confirmOrderButton})=>{
        await homePage.navigateToHomePage();
        await homePage.clickOnBronzerStick();
        await homePage.clickOnBronzerStick();
        await homePage.doubleClick_addedToCart();
        await cartPage.clickOnCheckoutButton();
        await confirmOrderButton.verifyOrderConfirmation();
    });
    test('s1_tc_003 add multiple product from homepage ',async({homePage,cartPage,confirmOrderButton})=>{
        await homePage.clickOnHomeIcon();
        await homePage.totalMoistureFacialCream_addToCart();
        await homePage.bellaBamba_addToCart();
        await homePage.bellaBamba_addedToCart();
        await cartPage.clickOnCheckoutButton();
        await confirmOrderButton.verifyOrderConfirmation();

    });
    test('s1_tc_004 customize product colour ',async({homePage,cartPage,confirmOrderButton})=>{
        await homePage.clickOnHomeIcon();
        await homePage.womenHighHeel();
        await homePage.womenHighHeel_bluecolour();
        await homePage.womenHighHeel_addToCart();
        cartPage.clickOnCheckoutButton();
        confirmOrderButton.verifyOrderConfirmation();
    })

    }
})

// automated compound level functional testing (test case no.5)


test.describe('automation_test_store_scenario10',()=>{
    {
    test.beforeEach(async({page})=>{
        await page.goto(config.baseURL);
        await page.locator(footerLocators.footer).getByRole(footerLocators.login.role,{name:footerLocators.login.name}).click();})
   
     test('s10_tc_oo5 forgot password ',async({forgotPassword})=>{
        await forgotPassword.clickOnForgotPassword();
        await forgotPassword.clickOnloginName_textBox();
        await forgotPassword.clickOnEmail_text();
        await forgotPassword.clickOnContinueButton();
        await forgotPassword.verify_assertion();


     })
}})

//feature level functional testing -scenario9(done all test cases)


test.describe('automation_test_store_scenario9',()=>{

    test('sc9_tc-001 user able to login using footer',async({page,footer,returningCustomer})=>{
      await page.goto(config.baseURL);
      await footer.clickOnLogin();
      await returningCustomer.enterLoginName(testData.loginName);
      await returningCustomer.enterPassword(testData.password);
      await returningCustomer.clickOnLoginButton();

    })
    test('sc9_tc_002 user able to logout using footer ',async({footer,page,returningCustomer})=>{
      await page.goto(config.baseURL);
      await footer.clickOnLogin();
      await returningCustomer.enterLoginName(testData.loginName);
      await returningCustomer.enterPassword(testData.password);
      await returningCustomer.clickOnLoginButton();
      await footer.clickOnLogoff();
      await footer.logoutMessage();


    })
})

//total 4 scenarios automated with 11 test cases