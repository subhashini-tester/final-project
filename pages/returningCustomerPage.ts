import{Page} from "@playwright/test";
import {returningCustomerLocators} from "../locators/returningCustomerLocator";

export class ReturningCustomerPage{
    constructor(private page:Page){}
    async enterLoginName(loginName:string){
        await this.page.locator(returningCustomerLocators.loginName).fill(loginName);
    }
    async enterPassword(password:string){
        await this.page.locator(returningCustomerLocators.password).fill(password);
    }
    async clickOnLoginButton(){
        await this.page.getByRole(returningCustomerLocators.loginButton.role,{name: returningCustomerLocators.loginButton.name}).click();
    }
}