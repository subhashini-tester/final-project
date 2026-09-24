import {test as base,Page} from "@playwright/test";
import { CartPage } from "../pages/cartPage";
import {ConditionerPage} from "../pages/conditionersPage";
import {HomePage} from "../pages/homePage";
import { ReturningCustomerPage} from "../pages/returningCustomerPage";
import { Categories } from "../pages/components/categories";
import { subCategories } from "../pages/components/categories";
import { Footer } from "../pages/components/footer";
import { CheckoutConfirmationPage } from "../pages/checkoutConfirmationPage";
import { ForgotPassword } from "../pages/forgotPasswordPage";
type MyFixtures = {
    cartPage:CartPage;
    conditionerPage:ConditionerPage;
    homePage:HomePage;
    returningCustomer:ReturningCustomerPage;
    categories:Categories;
    subcategories:subCategories;
    footer:Footer;
    confirmOrderButton:CheckoutConfirmationPage;
    forgotPassword:ForgotPassword;

    
};
export const test=base.extend<MyFixtures>({
    cartPage:async({page},use)=>{
        await use (new CartPage(page));

    },
    conditionerPage:async({page},use)=>{
        await use (new ConditionerPage(page));
    },
    homePage:async({page},use)=>{
        await use (new HomePage(page));
    },
    returningCustomer:async({page},use)=>{
        await use (new ReturningCustomerPage(page));
    },
     categories:async({page},use)=>{
        await use (new Categories(page));
    },
         subcategories:async({page},use)=>{
        await use (new subCategories(page));
    },
    footer:async({page},use)=>{
        await use (new Footer(page));
    }  ,
    confirmOrderButton:async({page},use)=>{
        await use (new CheckoutConfirmationPage(page));
    }  ,
     forgotPassword:async({page},use)=>{
        await use (new ForgotPassword(page));
    }  
});