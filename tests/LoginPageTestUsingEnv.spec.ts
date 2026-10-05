
import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

let loginPageObj: LoginPage

test('Login into Application', async ({ page }) => {

    loginPageObj = new LoginPage(page)
    await loginPageObj.launchURL(process.env.BASE_URL!)
    await loginPageObj.loginIntoApplication(process.env.EMAIL!, process.env.PASSWORD!)


})

test('Login Into Application with invalid creds', async ({ page }) => {

    loginPageObj = new LoginPage(page)
    await loginPageObj.launchURL(process.env.BASE_URL!)
    await loginPageObj.loginIntoApplication(process.env.EMAIL!, process.env.INCORRECTPASSWORD!)
    await expect(loginPageObj.errorMessage).toHaveText(" Incorrect email or password. ")


})

