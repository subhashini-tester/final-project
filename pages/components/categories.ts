import { Page } from "@playwright/test";
import { categoryLocators } from "../../locators/categoryLocator";
export class Categories{
    constructor(private page:Page){}
    async hairCare(){
        await this.page.getByRole(categoryLocators.hairCare.role,{name:categoryLocators.hairCare.name}).hover();

    };
    
};
export class subCategories{
    constructor(private page:Page){}
    async conditioner(){
        await this.page.locator('a[href*="path=52_54"]').filter({ hasText: 'Conditioner' }).first().click();
    };
};