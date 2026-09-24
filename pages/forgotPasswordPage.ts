import { Page ,expect} from "@playwright/test";
import { forgotPassword } from "../locators/forgotPassword";   
import * as datas from "../test_data/forgotPassword.json" ;
import { footerLocators } from "../locators/footerLocators";

export class ForgotPassword{
    constructor(private page:Page){}

    async clickOnForgotPassword(){
        await this.page.locator(forgotPassword.forgotPassword_click).click();
    }
    async clickOnloginName_textBox(){
        await this.page.locator(forgotPassword.loginNme_textBox).fill(datas.loginName);
    }
    async clickOnEmail_text(){
        await this.page.locator(forgotPassword.emailAddress_textBox).fill(datas.email);
    }
    async clickOnContinueButton(){
        await this.page.locator(forgotPassword.continueButton).click();
    }
    async verify_assertion(){
       await expect(this.page.locator(forgotPassword.assertion)).toContainText("Success: Password reset link has been sent to your e-mail address.")
    }
}