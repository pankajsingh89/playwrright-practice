// Locators and Methods related to Dashboard Page Only

import {test,expect, Page, Locator} from '@playwright/test'

export class DashboardPage{

    private page: Page
    private products: Locator
    addToCartMessage : Locator
    viewPageProductName: Locator
    viewPageProductPrice: Locator
    homePageProductPrice:string | null

    constructor(page:Page){
        this.page=page
        this.products=this.page.locator("div.card-body")
        this.addToCartMessage=this.page.locator("#toast-container")
        this.viewPageProductName = this.page.locator("div.rtl-text h2")
        this.viewPageProductPrice= this.page.locator("div.rtl-text h3")
        this.homePageProductPrice=""

    }

    async searchProduct(productName:string, index:number){
        await this.products.nth(0).waitFor()
        const countOfProducts= await this.products.count()
        for(let i=0; i<countOfProducts; i++){
            const productText=await this.products.nth(i).locator("b").textContent()
            if(productText == productName){
                this.homePageProductPrice = await this.products.nth(i).locator("div.text-muted").textContent()
                await this.page.waitForTimeout(3000)
                await this.products.nth(i).locator("button").nth(index).click()
                break
            }
            
        }
    }

}