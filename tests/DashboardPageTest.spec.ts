import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'
import data from '../testdata/product.json'

const productName = "ADIDAS ORIGINAL"

test.describe.configure({mode:'serial'})

let loginPageObj: LoginPage
let dashboardPageObj: DashboardPage

test.beforeEach('Common steps', async ({ page }) => {

    loginPageObj = new LoginPage(page)
    dashboardPageObj = new DashboardPage(page)
    await loginPageObj.launchURL(data[0].url)
    await loginPageObj.loginIntoApplication(data[0].username, data[0].password)

})

test('Search and add the product to the cart',{tag:'@regression'}, async ({ page }) => {

    await dashboardPageObj.searchProduct(productName, 1)
    await expect(dashboardPageObj.addToCartMessage).toContainText("Product Added To Cart")
})

test('Search and veiw the product details',{tag:'@regression'}, async ({ page }) => {

    await dashboardPageObj.searchProduct(productName, 0)
    await expect(dashboardPageObj.viewPageProductName).toHaveText(productName)
    await expect(dashboardPageObj.viewPageProductPrice).toHaveText(dashboardPageObj.homePageProductPrice!)
})