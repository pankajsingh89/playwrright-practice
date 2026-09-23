import {test,expect, Page} from '@playwright/test'

export class BasePage{

    protected page: Page

    constructor(page:Page){

        this.page=page
    }

    async launchURL(url:string){
        await this.page.goto(url)
    }

}