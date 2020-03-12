/**
 * Page helpers for general utility
 */
import { browser, ElementFinder, protractor, WebElement } from 'protractor';
import { WaitHelper } from './wait-helper';
import { IncidentReportLocator } from '../../page-objects/pages/incident-report/incident-report-po';

//const remote = require('selenium-webdriver/remote');

export class PageHelper {


    private static readonly EC = protractor.ExpectedConditions;

    // noinspection JSValidateJSDoc
    /**
     * Timeout collection to meet various needs
     * @type {{xs: number; s: number; m: number; l: number; xl: number; xxl: number; xxxl: number}}
     */
    static timeout = {
        xs: 2000,
        s: 5000,
        m: 10000,
        l: 25000,
        xl: 50000,
        xxl: 75000,
        xxxl: 200000
    };
    static DEFAULT_TIMEOUT = PageHelper.timeout.l;

    static async getBrowser() {
        const capabilities = await browser.getCapabilities();
        return capabilities.get('browserName');
    }

    static get isFullScreen() {
        const fullScreenScript = 'if (!window.screenTop && !window.screenY){return true;}'
            + 'else{return false;}';
        return browser.executeScript(fullScreenScript);
    }

    static actionKeyDown(key: string) {
        return browser.actions().keyDown(key).perform();
    }

    static executeInIframe(index: number | WebElement, fn: Function) {
        browser.switchTo().frame(index);
        fn();
        browser.switchTo().defaultContent();
        browser.waitForAngular();
    }


    static actionSendKeys(key: string) {
        return browser.actions().sendKeys(key).perform();
    }

    static sendKeysToInputField(elem: ElementFinder, key: string) {
        elem.sendKeys(key);
    }

    static actionKeyUp(key: string) {
        return browser.actions().keyUp(key).perform();
    }

    static keyPressForBrowser(key: string) {
        return browser.actions().sendKeys(key).perform();
    }

    // Known issue for chrome, direct maximize window doesn't work
    /**
     * To maximize the browser window
     */
    static async maximizeWindow() {
        class Size {
            width: number;
            height: number;
        }

        const windowSize = await this.executeScript(function () {
            return {
                width: window.screen.availWidth,
                height: window.screen.availHeight
            };
        });

        const result = windowSize as Size;

        return this.setWindowSize(result.width, result.height);
    }

    /**
     * Sets window size
     * @param {number} width
     * @param {number} height
     */
    static async setWindowSize(width: number, height: number) {
        return browser.driver
            .manage()
            .window()
            .setSize(width, height);
    }

    /**
     * Wrapper for executing javascript code
     * @param {string | Function} script
     * @param varAargs
     * @returns {promise.Promise<any>}
     */
    static async executeScript(script: string | Function,
        ...varAargs: any[]) {
        return browser.driver.executeScript(script, varAargs);
    }

    /**
     * Switch new window  by index
     * @param {number} windowNumber
     * @returns {Promise<promise.Promise<void>>}
     */
    static async switchToNewTabIfAvailable(windowNumber = 1) {
        const handles = await browser.getAllWindowHandles();
        const newWindowHandle = handles[handles.length - 1]; // this is your new window
        if (newWindowHandle) {
            await browser.switchTo().window(newWindowHandle);
        }
        const url = await browser.getCurrentUrl();

        await WaitHelper.getInstance().waitForElement(IncidentReportLocator.incidentLink, this.timeout.m, "Tab has not been switched");
        return browser.driver.get(url);
    }

    static async switchToNewTabWithoutWait(windowNumber = 1) {
        const handles = await browser.getAllWindowHandles();
        const newWindowHandle = handles[handles.length - 1]; // this is your new window
        if (newWindowHandle) {
            await browser.switchTo().window(newWindowHandle);
        }
        const url = await browser.getCurrentUrl();
        return browser.driver.get(url);
    }

    static async  getBrowserSize() {
        const handles = await browser.getAllWindowHandles();
        return handles.length;
    }

    static async closeMultiTabs() {
        var tabCount = await PageHelper.getBrowserSize();
        var i: number;
        for (i = 1; i < tabCount; i++) {
            await PageHelper.switchToNewTabIfAvailable();
            await PageHelper.switchToDefaultTab();
        }
    }

    static async switchToDefaultTab() {
        await browser.getAllWindowHandles().then(function (handles) {
            // We currently are on the second tab...
            if (handles.length > 1)
                browser.driver.close();
            browser.switchTo().window(handles[0]);
        });
    }

    static async switchToGivenUrl(url: string) {
        return await browser.executeScript("window.open(arguments[0], '_blank')", url);
    }

    /**
     * Title is
     * @param {string} title
     * @returns {Promise<Promise<any>>}
     */
    static async titleIs(title: string) {
        return this.EC.titleIs(title);
    }



    /**
     * Click on the element and wait for it to get hidden
     * @param {ElementFinder} targetElement
     * @returns {PromiseLike<boolean> | Promise<boolean> | Q.Promise<any> | promise.Promise<any> | Q.IPromise<any>}
     */
    static async clickAndWaitForElementToHide(targetElement: ElementFinder) {
        await WaitHelper.getInstance().waitForElementToBeClickable(targetElement);
        await targetElement.click();
        return await WaitHelper.getInstance().waitForElementToBeHidden(targetElement);
    }

    /**
     * Gets promise for current url
     * @returns {any}
     */
    static async currentUrl() {
        return browser.getCurrentUrl();
    }

    static async switchToDefaultContent() {
        return browser.switchTo().defaultContent();
    }

    static async switchToFrame(frameEle: WebElement) {
        // Wait for frame to exist first
        await browser.sleep(PageHelper.timeout.s);
        return browser.driver.switchTo().frame(frameEle);
    }

    static async browserNavigateBack() {
        await browser.navigate().back();
    }

    static async scrollDownUntilElementIsVisible(targetElement: ElementFinder) {
        while (!await targetElement.isDisplayed()) {
            await browser.sleep(100)
            await browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        }
        await browser.sleep(100)
        await browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
    }

    static async scrollUpUntilElementIsVisible(targetElement: ElementFinder) {
        while (!await targetElement.isDisplayed()) {
            await browser.actions().sendKeys(protractor.Key.ARROW_UP).perform();
        }
        await browser.actions().sendKeys(protractor.Key.ARROW_UP).perform();
    }
}
