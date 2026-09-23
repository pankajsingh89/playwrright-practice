
import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

const url="https://rahulshettyacademy.com/client/"
const username="pankaj089@gmail.com"
const password="Test@123"



test('Login into Application',async({page})=>{

    const loginPageObj=new LoginPage(page)

    await loginPageObj.launchURL(url);
    await loginPageObj.loginIntoApplication(username,password)
    await expect(loginPageObj.homePageIdentifier).toBeVisible()


})

