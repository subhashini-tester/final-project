import { Page ,expect} from "@playwright/test";
import { footerLocators } from "../../locators/footerLocators";
import { config } from "../../config/config";

export class Footer {
    constructor(private page: Page) {}

    async clickOnLogin() {
        await this.page.locator(footerLocators.footer).getByRole(footerLocators.login.role, { name: footerLocators.login.name }).click();
    }

    async clickOnLogoff() {
        await this.page.locator(footerLocators.footer).getByRole(footerLocators.logoff.role, { name: footerLocators.logoff.name }).click();
    }
   async logoutMessage(){
    await expect(this.page.locator(footerLocators.logoutMessage)).toContainText(" Account Logout");
   }
}