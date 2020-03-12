import { browser } from "protractor";
import { ElementHelper } from "../../../components/html/element-helper";
import { LoginPage } from "./login.po";
import { LoginPageConstants } from "./login-page.constants";
import { TextboxHelper } from "../../../components/html/textbox-helper";
import { WaitHelper } from "../../../components/html/wait-helper";
import { HomePageConstant } from "../home-page/home-page-constants";
import { HomePageLocator } from "../home-page/home-page-po";

export class LoginPageHelper {

    /**
     * @description Navigate to the base URL
     */
    static async navigateUrl() {
        //Navigate to the Base URL
        await browser.get(browser.baseUrl);
    }

    /**
     * @description Verify the Login page
     */
    static async verifyLoginPage() {
        //Verify the Email input box
        await expect(await ElementHelper.isElementDisplayed(HomePageLocator.loginInputLables(HomePageConstant.loginInputLabelsConstant.Username))).toBe(true, 'Username Input Box is not present')

        //Verify the Password box
        await expect(await ElementHelper.isElementDisplayed(HomePageLocator.loginInputLables(HomePageConstant.loginInputLabelsConstant.Password))).toBe(true, 'Password Input Box is not present')

        //Verify the Login Button
        await expect(await ElementHelper.isElementDisplayed(LoginPage.loginButton)).toBe(true, 'Login button is not present')
    }

    /**
     * Click on User on the Home Page
     */
    static async clickOnUserIcon() {
        //Click on the User on Home page
        await ElementHelper.click(LoginPage.userDrop);
    }

    /**
     * @description Click on Login Drop Value
     */
    static async clickOnLogin() {
        //Wait for Login Button to be Clickable
        await expect(await WaitHelper.getInstance().waitForElementToBeClickable(LoginPage.userLoginIcon(LoginPageConstants.userDropValueConstant.Login))).toBe(true);

        //Click on login
        await ElementHelper.click(LoginPage.userLoginIcon(LoginPageConstants.userDropValueConstant.Login));
    }

    /**
     * @description Click on Login Drop Value
     */
    static async clickOnLogout() {
        //Wait for Login Button to be Clickable
        await expect(await WaitHelper.getInstance().waitForElementToBeClickable(LoginPage.userLoginIcon(LoginPageConstants.userDropValueConstant.Logout))).toBe(true);

        //Click on login
        await ElementHelper.click(LoginPage.userLoginIcon(LoginPageConstants.userDropValueConstant.Logout));
    }


    /**
     * @description Click on the login button
     */
    static async clickOnLoginButton() {
        //Wait for Login Button to be Clickable
        // await WaitHelper.getInstance().waitForElementToBeClickable(LoginPage.loginButton);

        //Click on Login button
        await ElementHelper.actionMoveAndClick(LoginPage.loginButton)

        await browser.sleep(4000)
    }

    // /**
    //  * @description Login in to the Application
    //  */
    // static async loginIntoUser() {
    //     //click on User
    //     await this.clickOnUserIcon();

    //     //click on Login Drop 
    //     await this.clickOnLogin();

    //     //Enter the Email in the email text box
    //     await TextboxHelper.sendKeys(LoginPage.loginInputBox(LoginPageConstants.loginInputLabel.email), browser.params.user_email)

    //     //Enter the Email in the password text box
    //     await TextboxHelper.sendKeys(LoginPage.loginInputBox(LoginPageConstants.loginInputLabel.password), browser.params.user_password)

    //     //Click on the Login button
    //     this.clickOnLoginButton();
    // }


    /**
     * @description Login in to the Application
     */
    static async loginIntoUserOnly(username: string, password: string) {

        //Enter the Email in the email text box
        await TextboxHelper.sendKeys(LoginPage.loginInputBox(LoginPageConstants.loginInputLabel.username), username)

        //Enter the Email in the password text box
        await TextboxHelper.sendKeys(LoginPage.loginInputBox(LoginPageConstants.loginInputLabel.password), password)

        //Click on the Login button
        await this.clickOnLoginButton();
    }



    /**
     * @description Logout the User of the Application
     */
    static async logoutUser() {
        if (await ElementHelper.isElementDisplayed(LoginPage.userDrop)) {
            //click on User
            await this.clickOnUserIcon();

            //click on Login Drop 
            await this.clickOnLogout();
        }
    }

    static async selectTopLinks(linkName: string) {
        //select the top links
        await ElementHelper.click(LoginPage.topLinks(linkName));
    }
}
