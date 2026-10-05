
import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import data from '../testdata/testdata.json'

let loginPageObj: LoginPage



test.beforeEach('Common steps', async ({ page }) => {
    loginPageObj = new LoginPage(page)
    await loginPageObj.launchURL(data.url);

})

test('Login into Application', async ({ page }) => {

    await loginPageObj.loginIntoApplication(data.username, data.password)
    await expect(loginPageObj.homePageIdentifier).toBeVisible()
})

test('Login Into Application with invalid creds', async ({ page }) => {

    await loginPageObj.loginIntoApplication(data.username, data.incorrectPassword)
    await expect(loginPageObj.errorMessage).toHaveText(" Incorrect email or password. ")

})

