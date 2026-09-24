import{Page}from"@playwright/test";
import{checkoutConfirmationLocators}from"../locators/checkoutConfirmationLocators.ts";
export class CheckoutConfirmationPage{
    constructor(private page:Page){}
    async verifyOrderConfirmation(){
        await this.page.getByRole(checkoutConfirmationLocators.confirmOrderButton.role,{name:checkoutConfirmationLocators.confirmOrderButton.name}).click();
    }
}