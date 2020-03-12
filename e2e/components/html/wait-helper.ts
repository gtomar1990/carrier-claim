import { PageHelper } from './page-helper';
import { browser, ElementFinder, protractor, element, By } from 'protractor';

export class WaitHelper {
    private static instance: WaitHelper;
    private readonly EC = protractor.ExpectedConditions;

    private constructor() {
    }

    static getInstance() {
        if (!WaitHelper.instance) {
            WaitHelper.instance = new WaitHelper();
        }
        return WaitHelper.instance;
    }

    /**
     * Wait for an element to exist
     * @param {ElementFinder} targetElement
     * @param {number} timeout
     * @param {string} message
     */
    async waitForElement(targetElement: ElementFinder,
        timeout = PageHelper.DEFAULT_TIMEOUT,
        message = 'Element should exist') {
        return  await browser.wait(await this.EC.presenceOf(targetElement),
            timeout,
            targetElement.locator().toString() + message);
    }


    /**
     * wait for alert present
     * @param {number} timeout
     * @param {string} message
     * @returns {Promise<void>}
     */
    async waitForAlert(timeout = PageHelper.DEFAULT_TIMEOUT,
        message = "Alert message should be present") {
        return await browser.wait(await this.EC.alertIsPresent(), timeout, message);
    }

    /**
     * Wait for text present in element
     * @param {ElementFinder} targetElement
     * @param {string} text
     * @param {number} timeout
     * @param {string} message
     * @returns {Promise<any>}
     */
    async waitForTextToBePresentInElement(targetElement: ElementFinder,
        text: string,
        timeout = PageHelper.DEFAULT_TIMEOUT,
        message = 'text present in element') {
        return await browser.wait(await this.EC.textToBePresentInElement(targetElement, text),
            timeout, text + " " + message);
    }

    /**
     * Wait for element contains text
     * @param {ElementFinder} targetElement
     * @param {string} text
     * @param {number} timeout
     * @param {string} message
     * @returns {Promise<any>}
     */
    async  waitForTextToBePresentInElementValue(targetElement: ElementFinder,
        text: string,
        timeout = PageHelper.DEFAULT_TIMEOUT,
        message = 'Element should be contains') {
        return await browser.wait(await this.EC.textToBePresentInElementValue(targetElement, text),
            timeout, message + " " + text);
    }


    /**
     * Wait for url contains text
     * @param {string} content
     * @param {number} timeout
     * @param {string} message
     * @returns {Promise<void>}
     */
    async waitForElementUrlContains(content: string,
        timeout = PageHelper.DEFAULT_TIMEOUT,
        message = 'User should contains ' + content) {
        return await browser.wait(await this.EC.urlContains(content), timeout, message);
    }

    /**
     * Wait For title present
     * @param {string} title
     * @param {number} timeout
     * @param {string} message
     * @returns {Promise<any>}
     */
    async waitForTitleIs(title: string,
        timeout = PageHelper.DEFAULT_TIMEOUT,
        message = "application title should be " + title) {
        return await browser.wait(await this.EC.titleIs(title), timeout, message);
    }

    /**
     * Wait for time contains
     * @param {string} title
     * @param {number} timeout
     * @param {string} message
     * @returns {Promise<any>}
     */
    async waitForTitleContains(title: string,
        timeout = PageHelper.DEFAULT_TIMEOUT,
        message = "application should contains title " + title) {
        return await browser.wait(await this.EC.titleContains(title), timeout, message);
    }

    /**
     * Wait for an element to display
     * @param {ElementFinder} targetElement
     * @param {number} timeout
     * @param {string} message
     */
    async waitForElementToBeDisplayed(targetElement: ElementFinder,
        timeout = PageHelper.DEFAULT_TIMEOUT,
        message = 'Element should be visible') {
        return await browser.wait(this.EC.visibilityOf(targetElement),
            timeout,
            targetElement.locator().toString() + message)
            .then(() => true, () => false);
    }

    /**
     * Wait for an element to present
     * @param {ElementFinder} targetElement
     * @param {number} timeout
     * @param {string} message
     */
    async waitForElementToBePresent(targetElement: ElementFinder,
        timeout = PageHelper.DEFAULT_TIMEOUT,
        message = 'Element should be visible') {
        return await browser.wait(this.EC.presenceOf(targetElement),
            timeout,
            targetElement.locator().toString() + message)
            .then(() => true, () => false);
    }


    /**
     * Wait for an element to be invisible
     * @param targetElement 
     * @param timeout 
     * @param message 
     */
    async waitForElementToBeInvisible(targetElement: ElementFinder,
        timeout = PageHelper.DEFAULT_TIMEOUT,
        message = 'Element should be Invisible') {
        return  await browser.wait(this.EC.invisibilityOf(targetElement),
            timeout,
            targetElement.locator().toString() + message)
            .then(() => true, () => false);
    }

    /**
     * Wait for an element to hide
     * @param {ElementFinder} targetElement
     * @param {number} timeout
     * @param {string} message
     * @returns {any}
     */
    async waitForElementToBeHidden(targetElement: ElementFinder,
        timeout = PageHelper.DEFAULT_TIMEOUT,
        message = 'Element should not be visible') {
        return  await browser.wait(async () => !(await targetElement.isPresent() && await targetElement.isDisplayed()),
            timeout,
            targetElement.locator().toString() + message);
    }

    /**
     * Wait for an element to become clickable
     * @param {ElementFinder} targetElement
     * @param {number} timeout
     * @param {string} message
     */
    async waitForElementToBeClickable(targetElement: ElementFinder,
        timeout = PageHelper.DEFAULT_TIMEOUT,
        message = 'Element not clickable') {
        return  await browser.wait(await this.EC.elementToBeClickable(targetElement),
            timeout,
            await targetElement.locator().toString() + message);
    }

    /**
     * 
     * @param promiseCall 
     * @param resolver 
     * @param timeout 
     * @param message 
     */
    async waitForElementToResolve(promiseCall: Function,
        resolver: Function,
        timeout = PageHelper.DEFAULT_TIMEOUT,
        message = '') {
        let result = false;
        return await browser.wait(() => {
            promiseCall().then((value: any) => (result = resolver(value)));
            return result;
        }, timeout, message);
    }

    /**
     * 
     * @param targetElement 
     * @param timeout 
     * @param message 
     */
    async waitForElementToHaveText(targetElement: ElementFinder, timeout = PageHelper.DEFAULT_TIMEOUT, message = '') {
        return await this.waitForElementToResolve(() => targetElement.getText(), (text: string) => text.length > 0, timeout, message);
    }

    /**
     * 
     * @param targetElement Enter the locator for Tagert Element
     * @param timeout 
     */
    async waitForElementOptionallyPresent(targetElement: ElementFinder, timeout = PageHelper.DEFAULT_TIMEOUT) {
        const isDisplayed = await this.EC.presenceOf(targetElement);
        return await browser.wait(isDisplayed, timeout).then(function () {
            return true;
        }, function () {
            return false;
        });
    }

    /**
     * @description wait to element is noy attached with dom
     * @param {ElementFinder} targetElement
     * @param {number} timeout
     * @param {string} message
     * @returns {Promise<any>}
     */
    async waitForElementNotAttachedWithDon(targetElement: ElementFinder,
        timeout = PageHelper.DEFAULT_TIMEOUT,
        message = 'Element not attached with dom') {
        return await browser.wait(await this.EC.stalenessOf(targetElement),
            timeout,
            targetElement.locator().toString() + message);
    }
    
    
    /**
     * @description Static wait
     * @param timeoutInMS 
     */
    public async staticWait(timeoutInMS = PageHelper.timeout.xs) {
        return await browser.sleep(timeoutInMS);
    }

    /**
     * @description wait for spinner
     */
    public async  waitForToDisappear() {
        return await WaitHelper.getInstance().waitForElementToBePresent(element(By.css('[class="dx-overlay dx-widget dx-visibility-change-handler dx-loadpanel dx-state-invisible"]')));
    }

    /**
     * @description wait for spinner2
     */
    public async waitForToDisappear2() {
        return await WaitHelper.getInstance().waitForElementToBePresent(element(By.css('[class="dx-overlay-content dx-resizable dx-loadpanel-content dx-state-invisible"]')));
    }

    /**
     * @description wait for login spinner
     */
    public async waitForLogin() {
        return await WaitHelper.getInstance().waitForElementToBePresent(element(By.xpath('//*[contains(@class,"loader-container  hidden")]')))
    }

    /**
     * @description wait for spinner universal
     */
    public async waitForSpinnerDisappear() {
        // return true
        try {
            await this.waitForToDisappear();
            await browser.sleep(100);
            await WaitHelper.getInstance().waitForElementToBePresent(element(By.css("[class='dx-overlay-content dx-resizable dx-loadpanel-content dx-state-invisible'][aria-hidden='true']")));
            await browser.sleep(100);
            return await WaitHelper.getInstance().waitForToDisappear2();
            // return await this.waitForElementToBeInvisible(element(By.css("[class='dx-loadindicator-wrapper dx-loadindicator-image']")))
            // await this.waitForElementToBeInvisible(element(By.xpath("//*[@class='dx-overlay-wrapper dx-overlay-modal dx-overlay-shader dx-loadpanel-wrapper']")))
        }
        catch{
            return   true
        }
    }

    /**
     * @description wait for CGF Spinner
     */
    public async waitForCGFSpinnerDisappear() {

        try {
            return  await WaitHelper.getInstance().waitForElementToBeInvisible(element(By.css("[class='dx-overlay-content dx-resizable dx-loadpanel-content']")))
        }
        catch{
            return   true
        }
    }


    /**
     * @description CGF spinner
     */
    public async cgfGridSpinner() {
        await WaitHelper.getInstance().waitForElementToBePresent(element(By.css('[class="cgf-tab-right-content cfg-grid-container"] [class="dx-overlay-content dx-resizable dx-loadpanel-content dx-state-invisible"]')))
    }

    /**
     * @description Wait for Security spinner
     */
    public async waitForSecuritySpinnerDisappear() {
        await browser.sleep(500)
        return  await WaitHelper.getInstance().waitForElementToBePresent(element(By.css('[class="dx-overlay-content dx-resizable dx-loadpanel-content dx-state-invisible"][aria-hidden="true"] [class="dx-loadpanel-content-wrapper"]')));
    }
}
