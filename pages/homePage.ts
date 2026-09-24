import {Page} from "@playwright/test";
import {categoryLocators} from "../locators/categoryLocator";
import{config} from "../config/config";
import { homePageLocators } from "../locators/home_locators";


export class HomePage{
    constructor(private page:Page){}
    async navigateToHomePage(){
        await this.page.goto(config.baseURL);
     }
     async HairCare(){
         await this.page.getByRole(categoryLocators.hairCare.role,{name:categoryLocators.conditioner.name}).hover();
     }
        async clickOnConditioner(){
            await this.page.getByRole(categoryLocators.conditioner.role,{name:categoryLocators.conditioner.name}).click();
        }
        async clickOnBronzerStick(){
            const addButton = this.page.locator('section[id="featured"] a[data-id="50"]');
            await addButton.first().click({ force: true });
        }           
        async clickOnBronzerStickAddedToCart(){
            await this.page.locator('div.quick_basket a[title="Added to cart"]').first().click({ force: true });
        } 
        async clickOnHomeIcon(){
            await this.page.locator(homePageLocators.homeIcon).click();
        }  
        async doubleClick_addedToCart(){
            await this.page.locator(homePageLocators.doubleClick_addedToCart).first().click({ force: true });
        }
        async totalMoistureFacialCream_addToCart(){
            await this.page.locator(homePageLocators.totalMoistureFacialCream_addToCart).click();
        }
        async bellaBamba_addToCart(){
            await this.page.locator(homePageLocators.bellaBamba_addToCart).click();
        }
        async bellaBamba_addedToCart(){
            await this.page.locator(homePageLocators.bellaBamba_addedToCart).click();
        }
        async womenHighHeel(){
            await this.page.locator(homePageLocators.womenHighHeel).click();
        }
        async womenHighHeel_bluecolour(){
            await this.page.locator(homePageLocators.womenHighHeel_bluecolour).click();
        }
        async womenHighHeel_addToCart(){
            await this.page.locator(homePageLocators.womenHighHeel_addToCart).click();
        }
}
