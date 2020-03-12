import { ElementHelper } from "../../../components/html/element-helper";
import { HomePageLocator } from "./home-page-po";
import { ArrayUtils } from "../../../components/misc-utils/array-utilities";
import { browser } from "protractor";

export class HomePageHelper {

    /**
     * @description Verify the Dream Orbit Logo
     */
    static async verifyDreamOrbitLogo() {
        //Verify the Dream Orbit Logo on the Home page
        await expect(await ElementHelper.isElementDisplayed(HomePageLocator.dreamOrbitLogo)).toBe(true, 'Dream Orbit logo is not there');
    }

    /**
     * @description Verify the List on the Navigation Bar
     */
    static async verifyNavigationBarList() {
        //verify the list be getting from the Navigation bar
        await expect(await ArrayUtils.getListText(HomePageLocator.naviagtionBarList)).toEqual(['Desktops', 'Laptops & Notebooks', 'Components', 'Tablets', 'Software', 'Phones & PDAs', 'Cameras', 'MP3 Players'])
    }

    /**
     * @description Verify the Incident Report Link
     */
    static async verifyIncidentReportLink() {
        //Verify the incident report link
        await expect(await ElementHelper.isElementDisplayed(HomePageLocator.incidentReportLink)).toBe(true, 'Incident Report Link is not there')
    }

    /**
     * @description Verify the Home page
     */
    static async verifyHomePage() {
        //Verify the Home page Dream Orbit Logo
        await HomePageHelper.verifyDreamOrbitLogo();

        //Verify the Incident Report Link
        await HomePageHelper.verifyIncidentReportLink();
    }

    /**
    * @description Click on Incident Report Link
    */
    static async clickOnIncidentReportLink() {
        //click on the Incident Report Link
        await ElementHelper.click(HomePageLocator.incidentReportLink)
    }

    /**
     * @description Verify the Right menus
     */
    static async verifyRightColumnMenus() {
        //Constant for the right menus
        const rightMenus = ['My Account', 'Edit Account', 'Password', 'Address Book', 'Wish List', 'Order History', 'Downloads', 'Recurring payments', 'Reward Points', 'Returns', 'Transactions', 'Newsletter', 'Logout']
        await browser.sleep(2000)

        //Verify the right menus list
        await expect(await ArrayUtils.getListText(HomePageLocator.listColumnRightMenus)).toEqual(rightMenus, "There are not Right Menus")
    }

    /**
     * @description Verify the Content Header constant
     */
    static async verifyContentHeader() {
        //Content Header constant
        const contentHeader = ['My Account', 'My Orders', 'My Affiliate Account', 'Newsletter']

        //Verify the Content Header constant
        await expect(await ArrayUtils.getListText(HomePageLocator.pageContentHeaderList)).toEqual(contentHeader, 'Content Header is not equal')
    }
}