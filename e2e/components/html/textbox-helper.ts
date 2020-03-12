import { ElementFinder, protractor, browser } from 'protractor';
import { WaitHelper } from './wait-helper';
import { ElementHelper } from "./element-helper";
import { HtmlHelperFactory } from '../misc-utils/html-helper.factory';

export class TextboxHelper {
    /**
     * Clears the existing text from an input elements
     * @param {ElementFinder} locator
     */
    static async clearText(locator: ElementFinder) {
        await WaitHelper.getInstance().waitForElementToBeDisplayed(locator);
        let ctrl = protractor.Key.CONTROL;
        const command = protractor.Key.chord(ctrl, 'a') + protractor.Key.BACK_SPACE;
        await locator.sendKeys(command);
        await locator.clear();
    }

    /**
     * Send Keys to an input elements once it becomes available
     * @param {ElementFinder} locator for element
     * @param {string} value to be sent
     * @param {boolean} sendEnter for sending an enter key
     */
    static async sendKeys(locator: ElementFinder,
        value: string,
        sendEnter = false) {
        await WaitHelper.getInstance().waitForElementToBeDisplayed(locator);
        await this.clearText(locator);

        // On IE, text is sometimes not well sent, this is a workaround
        await locator.sendKeys(value);
        if (sendEnter) {
            await locator.sendKeys(protractor.Key.ENTER);
        }
    }

    /**
     * Send Keys to an input elements once it becomes available
     * @param {ElementFinder} locator for element
     * @param {string} value to be sent
     * @param {boolean} sendEnter for sending an enter key
     */
    static async sendTab(locator: ElementFinder) {
        await WaitHelper.getInstance().waitForElementToBeDisplayed(locator);
        await locator.sendKeys(protractor.Key.TAB);
    }

    /**
    * Send Keys to an input elements once it becomes available
    * @param {ElementFinder} locator for element
    * @param {string} value to be sent
    * @param {boolean} sendEnter for sending an enter key
    */
    static async sendKeysOnly(locator: ElementFinder,
        value: string) {
        await WaitHelper.getInstance().waitForElementToBeDisplayed(locator);
        await locator.sendKeys(value);
    }

    /**
     * Checks whether an input box has particular value or not
     * @param {ElementFinder} locator
     * @param {string} text
     * @returns {PromiseLike<boolean> | Promise<boolean> | Q.Promise<any> | promise.Promise<any> | Q.IPromise<any>}
     */
    static async hasValue(locator: ElementFinder, text: string) {
        const val = await ElementHelper.getAttributeValue(
            locator,
            HtmlHelperFactory.attributes.value
        );
        return val === text;
    }


    /**
     * 
     * @param element 
     * @param value 
     */
    static async sendKeysSlow(locator: ElementFinder, value: string) {
        await WaitHelper.getInstance().waitForElementToBeDisplayed(locator);
        await this.clearText(locator);
        for (let i: number = 0; i < value.length; i++) {
            await locator.sendKeys(value.charAt(i));
        }
    }

    /**
  * 
  * @param element 
  * @param value 
  */
    static async sendKeysSlowOnly(locator: ElementFinder, value: string) {
        await browser.sleep(2000);
        await WaitHelper.getInstance().waitForElementToBeDisplayed(locator);
        await this.clearText(locator);
        for (let i: number = 0; i < value.length; i++) {
            await locator.sendKeys(value.charAt(i));
        }
    }

}
