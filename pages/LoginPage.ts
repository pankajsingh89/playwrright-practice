// Locators and Methods related to loginPage


import { Locator, Page } from '@playwright/test';


export class LoginPage{

    // Locators - as a properties

    page:Page
    private email : Locator 
    private password : Locator
    private loginBtn : Locator
    errorMessage : Locator
    homePageIdentifier : Locator

    constructor(page: Page){
        this.page=page
        this.email=page.locator('#userEmail')
        this.password=page.locator('#userPassword')
        this.loginBtn=page.locator('#login')
        this.errorMessage=page.locator('#toast-container')
        this.homePageIdentifier=page.getByRole('link',{name:'ll help you prepare'})
    }


    async loginIntoApplication(username: string,password: string){
        
        await this.email.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
    }
    
     async launchURL(url:string){
        await this.page.goto(url)
    }

}