import { element, By } from "protractor"

export class HomePageLocator {

    /**
     * @description get the Home page Dream Orbit Logo Locator
     */
    static get dreamOrbitLogo() {
        return element(By.xpath('//*[@id="imgLogo"]'));
    }

    /**
     * @description get the Navigation bar List
     */
    static get naviagtionBarList() {
        return '//*[@class="collapse navbar-collapse navbar-ex1-collapse"]//*[@class="nav navbar-nav"]/li/a'
    }

    /**
     * @description Swtich to the banner frame
     */
    static get bannerFrame(){
        return element(By.css('[id="banner"]')).getWebElement()
    }

    /**
     * @description get the Incident Report Link
     */
    static get incidentReportLink() {
        return element(By.css('[id="linkIncidentsApp"]'))
    }

    /**
     * @description Get the Input Labels of Email or Passowrd
     * @param inputLabels Input Labels of Email or Password
     */
    static loginInputLables(inputLabels: string) {
        return element(By.xpath('//form[@id="Form1"]//input[@placeholder="' + inputLabels + '"]'))
    }

    /**
     * @description List of the column in the Right Menu
     */
    static get listColumnRightMenus() {
        return '//*[@class="list-group"]//a'
    }

    /**
     * @description Get the BreadCrumb Locator
     */
    static get breadCrumb() {
        return element(By.css('[class="breadcrumb"]'));
    }

    static get pageContentHeaderList() {
        return '//*[@id="content"]//h2'
    }

}