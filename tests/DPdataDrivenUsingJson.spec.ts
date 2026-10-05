import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'
import data from '../testdata/product.json'


const productName="ADIDAS ORIGINAL"

let loginPageObj:LoginPage
let dashboardPageObj:DashboardPage

test.beforeEach('Common steps', async({page})=>{

    loginPageObj=new LoginPage(page)
    dashboardPageObj= new DashboardPage(page)
   

})

for(let product of data){
    test(`Search and add the product  to cart for ${product.productName}`,{tag:'@smoke'},async ()=>{
        await loginPageObj.launchURL(product.url)
        await loginPageObj.loginIntoApplication(product.username,product.password)
        await dashboardPageObj.searchProduct(product.productName,1)
        await expect(dashboardPageObj.addToCartMessage).toHaveText("Product Added To Cart")

    })
}



