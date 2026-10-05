import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'
import { ExcelUtils } from '../utils/ExcelUtils'
import path from 'path'

const filePath = path.join(__dirname, "../testdata/excel.xlsx")
const sheetName = "Login"
const productName = "ADIDAS ORIGINAL"

let data
try {
     data = ExcelUtils.getDataFromExcel(filePath, sheetName)
} catch (e) {
    console.log(e);
}
let loginPageObj: LoginPage
let dashboardPageObj: DashboardPage

test.beforeEach('Common steps', async ({ page }) => {

    loginPageObj = new LoginPage(page)
    dashboardPageObj = new DashboardPage(page)
    await loginPageObj.launchURL(data.url)
    await loginPageObj.loginIntoApplication(data.username, data.password)

})

test('Search and add the product to the cart', async ({ page }) => {

    await dashboardPageObj.searchProduct(productName, 1)
    await expect(dashboardPageObj.addToCartMessage).toContainText("Product Added To Cart")
})

test('Search and veiw the product details', async ({ page }) => {

    await dashboardPageObj.searchProduct(productName, 0)
    await expect(dashboardPageObj.viewPageProductName).toHaveText(productName)
    await expect(dashboardPageObj.viewPageProductPrice).toHaveText(dashboardPageObj.homePageProductPrice!)
})