import { Page } from "@playwright/test";
import { conditionersPageLocators } from "../locators/conditionersLocator";

export class ConditionerPage {
    constructor(private page: Page) {}

    async highlightingExpressionAddToCart() {
        await this.page.goto(conditionersPageLocators.highlightingExpressions.productUrl);
        await this.page.locator(conditionersPageLocators.highlightingExpressions.addToCart).click();
    }

    async highlightingExpressionAddedToCart() {
        await this.page.goto(conditionersPageLocators.highlightingExpressions.productUrl);
        await this.page.locator(conditionersPageLocators.highlightingExpressions.addToCart).click();
    }

    async addPanteenClassicCareToCart() {
        await this.page.goto(conditionersPageLocators.panteneClassicCare.productUrl);
        await this.page.locator(conditionersPageLocators.panteneClassicCare.addToCart).click();
    }
}