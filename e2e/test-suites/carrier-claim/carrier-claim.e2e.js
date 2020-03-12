import { SuiteNames } from '../helpers/suite-names';
import { TestModuleNames } from "../helpers/test-module";
import { LoginPageHelper } from '../../page-objects/pages/login/login-page.helper';
import { HomePageHelper } from '../../page-objects/pages/home-page/home-page-helper';
import { PageHelper } from '../../components/html/page-helper';
import { IncidentReportHelper } from '../../page-objects/pages/incident-report/incident-report-helper';
import { NewIncidentPageHelper } from '../../page-objects/pages/new-incident-page/new-incident-page-helper';
import { HomePageLocator } from '../../page-objects/pages/home-page/home-page-po';

var resultLeaker = {
    suiteStarted: function (result) { jasmine.results = { suite: result }; },
    specStarted: function (result) { jasmine.results.spec = result; }
};
jasmine.getEnv().addReporter(resultLeaker);

describe(SuiteNames.regressionTestSuite + " " + TestModuleNames.OpenCart, () => {


    beforeAll(async (done) => {
        await browser.manage().deleteAllCookies();

        browser.logger.info("Launch Carrier Claim Portal")
        await LoginPageHelper.navigateUrl();

        setTimeout(async () => {
            await done();
        }, 10000);
    });

    beforeEach(async () => {
        await browser.executeScript('window.sessionStorage.clear();');
        await browser.executeScript('window.localStorage.clear();');

        // browser.logger.info('Navigate to the main page')
        // await LoginPageHelper.navigateUrl();
        // await done();
    });


    it("004: Verify Search And Checkout With Registered User", async () => {
        browser.logger.info("Verify the Login Page");
        await LoginPageHelper.verifyLoginPage();

        browser.logger.info("Login into the User");
        await LoginPageHelper.loginIntoUserOnly(browser.params.user_name, browser.params.user_password);

        browser.logger.info("Switch to the frame");
        await HomePageHelper.switchToBannerFrame()
        browser.logger.info("Verify the Home page of the Application");
        await HomePageHelper.verifyHomePage();

        browser.logger.info("Click on incident report link");
        await HomePageHelper.clickOnIncidentReportLink();

        browser.logger.info("Switch to new tab");
        await PageHelper.switchToNewTabIfAvailable();

        browser.logger.info("Click on new incident button");
        await IncidentReportHelper.clickOnNewIncidentButton();

        browser.logger.info("Verify the New Incident Screen");
        await NewIncidentPageHelper.verifyNewIncidentScreen();

        browser.logger.info("Enter the form deatils on New Incident Screen");
        await NewIncidentPageHelper.fillIncidentForm();

        browser.logger.info("Click on Save button");
        await NewIncidentPageHelper.clickOnSaveButton();

        browser.logger.info("Verify the confirmation message");
        await NewIncidentPageHelper.verifyConfirmationMessage();

        browser.logger.info("Click on OK button");
        await NewIncidentPageHelper.clickOnOkButton();

        browser.logger.info("Verify the incident number");
        await NewIncidentPageHelper.verifyIncidentNumber();

    });


    afterEach(async () => {
        // browser.logger.info('Navigate to the main page')
        // await LoginPageHelper.navigateUrl();

        // browser.logger.info('Logout the User of the appliction')
        // await LoginPageHelper.logoutUser();
    });

    // afterAll(async () => {
    //     await browser.close()
    // });

    // afterEach(async (done) => {

    // });

});
