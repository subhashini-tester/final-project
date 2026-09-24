import {Page,expect} from "@playwright/test";
import{cartPageLocators} from "../locators/cartLocators";

export class CartPage{
    constructor(private page:Page){}
    async clearCart(){
        await this.page.goto('https://automationteststore.com/index.php?rt=checkout/cart');
        while (await this.page.locator('a[href*="checkout/cart&remove="]').count() > 0) {
            await this.page.locator('a[href*="checkout/cart&remove="]').first().click();
            await this.page.waitForLoadState('networkidle');
        }
    }
    async clickOnCheckoutButton(){
        await this.page.locator(cartPageLocators.checkoutButton).click();
    }
    async verifyCheckoutButtonIsVisible(){
        await expect(this.page.locator(cartPageLocators.checkoutButton)).toBeVisible();
    }
        async verifyCartQuantity(){   
            await expect(this.page.locator(cartPageLocators.cartQuantity)).toHaveValue('2');
        }
        async verifyCartTotalForConditioners(){
            await expect(this.page.locator(cartPageLocators.cartTotalForConditioners)).toHaveText('$79.45');
        }
        async removeClassicCareFromCart(){
            await this.page.locator(cartPageLocators.removeClassicCareFromCart).click({ force: true });
            await this.page.waitForLoadState('networkidle');
        }
        async verifyCartTotalAfterRemovingClassicCare(){
            await expect(this.page.locator(cartPageLocators.cartTotalForConditioners)).toHaveText('$68.00');
        }
    }