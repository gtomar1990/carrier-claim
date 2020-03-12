import { browser, by, By, element, ElementFinder, protractor } from 'protractor';
import { WaitHelper } from './wait-helper';
import { ComponentHelpers } from '../component-helpers/component-helpers';
import { HtmlHelperFactory } from '../misc-utils/html-helper.factory';
import { ValidationsHelper } from '../misc-utils/validation-helper';
import { PageHelper } from './page-helper';

export class ElementHelper {

    private static readonly EC = protractor.ExpectedConditions;

    static async actionMouseMove(item: ElementFinder) {
        await WaitHelper.getInstance().waitForElementToBeDisplayed(item);
        return await browser.actions().mouseMove(item).perform();
    }

    static async actionMouseDown(item: ElementFinder) {
        await WaitHelper.getInstance().waitForElementToBeDisplayed(item);
        return await browser.actions().mouseDown(item).perform();
    }

    static async actionDragAndDrop(source: ElementFinder, destination: ElementFinder) {
        return await browser.actions().dragAndDrop(source, destination).perform();
    }

    static async actionDoubleClick(optElementOrButton?: ElementFinder | string, optButton?: string) {
        if (optElementOrButton) {
            return await browser.actions().doubleClick(optElementOrButton).perform();
        }
        if (optButton) {
            return await browser.actions().doubleClick(optButton).perform();
        }
    }

    static async actionClick(optElementOrButton?: ElementFinder | string, optButton?: string) {

        if (optElementOrButton) {
            return await browser.actions().click(optElementOrButton).perform();
        }
        if (optButton) {
            return await browser.actions().click(optElementOrButton).perform();
        }
    }

    static async actionMoveAndClick(optElementOrButton: ElementFinder) {
        await WaitHelper.getInstance().waitForElementToBeClickable(optElementOrButton);
        return await browser.actions().mouseMove(optElementOrButton).click(optElementOrButton).perform();
    }


    static async actionRightClick(optElementOrButton: ElementFinder) {
        await WaitHelper.getInstance().waitForSpinnerDisappear()
        await WaitHelper.getInstance().waitForElementToBeDisplayed(optElementOrButton);
        await browser.actions().mouseMove(optElementOrButton).perform();
        return await browser.actions().click(optElementOrButton, protractor.Button.RIGHT).perform();
    }

    static async actionHoverOver(locator: ElementFinder) {
        await WaitHelper.getInstance().waitForElementToBeDisplayed(locator);
        return browser.actions().mouseMove(locator).perform();
    }

    static async actionHoverOverAndClick(hoverOverLocator: ElementFinder, clickLocator: ElementFinder) {
        await WaitHelper.getInstance().waitForElementToBeDisplayed(hoverOverLocator);
        return await browser.actions().mouseMove(hoverOverLocator).click(clickLocator).perform();
    }

    static async hasOption(select: ElementFinder, option: string) {
        return await select
            .element(by.cssContainingText('option', option))
            .isPresent();
    }

    static async hasSelectedOption(select: ElementFinder, option: string) {
        return select.element(by.xpath(`./option[${ComponentHelpers.getXPathFunctionByTextForDot(option)}]`)).isSelected();
    }

    static async getFocusedElement() {
        return await browser
            .driver
            .switchTo()
            .activeElement();
    }

    static async getSelectedOption(select: ElementFinder) {
        return await select.element(By.css('option[selected]'));
    }

    static async isVisible(locator: ElementFinder) {
        return await this.EC.visibilityOf(locator);
    }

    static async isNotVisible(locator: ElementFinder) {
        return await this.EC.invisibilityOf(locator);
    }

    static async elementNotPresent(locator: any, fieldName: string) {
        await browser.manage().timeouts().implicitlyWait(0)
        await element.all(locator).then(function (items) {
            expect(items.length).toBe(0, ValidationsHelper.getDisplayedValidation(fieldName));
        });
        await browser.manage().timeouts().implicitlyWait(3000)
    }

    static async inDom(locator: ElementFinder) {
        return await this.EC.presenceOf(locator);
    }

    static async notInDom(locator: ElementFinder) {
        return await this.EC.stalenessOf(locator);
    }

    static async isClickable(locator: ElementFinder) {
        return await this.EC.elementToBeClickable(locator);
    }

    static async hasText(locator: ElementFinder, text: string) {
        return await this.EC.textToBePresentInElement(locator, text);
    }

    static async getValue(locator: ElementFinder) {
        await WaitHelper.getInstance().waitForElementToBeDisplayed(locator);
        return await ElementHelper.getAttributeValue(locator, HtmlHelperFactory.attributes.value);
    }



    static async click(targetElement: ElementFinder) {
        await expect(await WaitHelper.getInstance().waitForElementToBeClickable(targetElement)).toBe(true);
        return await targetElement.click();
    }

    static async visibleClick(targetElement: ElementFinder) {
        if (!await targetElement.isDisplayed()) {
            // await this.scrollToElement(targetElement)
            await PageHelper.scrollDownUntilElementIsVisible(targetElement);
            return await this.click(targetElement)
        }
        else {
            return await this.click(targetElement)
        }
    }

    static async scrollifNotVisible(targetElement: ElementFinder) {
        if (!await targetElement.isDisplayed()) {
            return await this.scrollToElement(targetElement)
        }
        else {
            return true
        }
    }

    static async scrollAndClick(targetElement: ElementFinder) {
        await ElementHelper.scrollToElement(targetElement);
        return await targetElement.click();
    }

    static async clickIfPresent(targetElement: ElementFinder) {
        const isPresent = await targetElement.isPresent();
        if (isPresent) {
            return await this.click(targetElement);
        }
        return;
    }

    static async clickUsingJs(targetElement: ElementFinder) {
        await WaitHelper.getInstance().waitForElementToBeClickable(targetElement);
        return await this.clickUsingJsNoWait(targetElement)
    }

    static async clickUsingJsNoWait(targetElement: ElementFinder) {
        return await browser.executeScript('arguments[0].click();', targetElement);
    }

    /**
    * Gets html attribute value
    * @param {WebElementPromise} elem
    * @param {string} attribute
    * @returns {string} attribute value
    */
    static async getAttributeValue(elem: ElementFinder,
        attribute: string): Promise<string> {
        await WaitHelper.getInstance().waitForElementToBeDisplayed(elem);
        const attributeValue = await elem.getAttribute(attribute)
        return await attributeValue.trim();
    }

    static async getAttributeValueNull(elem: ElementFinder,
        attribute: string): Promise<String> {
        await WaitHelper.getInstance().waitForElementToBeDisplayed(elem);
        const attributeValue = await elem.getAttribute(attribute)
        return await attributeValue;
    }

    /**
    * get text from element
    * @param {ElementFinder} element
    * @returns {Promise<any>}
    */
    static async getText(element: ElementFinder) {
        await WaitHelper.getInstance().waitForElementToBeDisplayed(element);
        const text = await element.getText();
        return await text.trim();
    }

    /**
  * get hidden text from element
  * @param {ElementFinder} element
  * @returns {Promise<any>}
  */
    static async getHiddenText(element: ElementFinder, wait = false) {
        if (wait) {
            await WaitHelper.getInstance().waitForElementToBeDisplayed(element);
        }
        var text = await browser.executeScript("return arguments[0].innerText", element);
        return await text.toString().trim();
    }

    /**
     * Get Css value
     * @param {ElementFinder} element
     * @param {string} cssAttribute
     * @returns {Promise<void>}
     */
    static async getCssValue(element: ElementFinder,
        cssAttribute: string) {
        await WaitHelper.getInstance().waitForElementToBeDisplayed(element);
        const cssValue = await element.getCssValue(cssAttribute);
        return await cssValue.trim();
    }

    /**
   * Verify whether element is displayed on page or not
   * @param {ElementFinder} targetElement
   * @param toWait
   * @param {boolean} toWait
   * @returns {Promise<any>}
   */
    static async isElementDisplayed(targetElement: ElementFinder, toWait = true) {
        if (toWait) {
            return await WaitHelper.getInstance().waitForElementToBeDisplayed(targetElement);
        }
        return await targetElement.isDisplayed();
    }

    static async isElementPresent(targetElement: ElementFinder, toWait = true) {
        if (toWait) {
            return await WaitHelper.getInstance().waitForElementToBeDisplayed(targetElement);
        }
        return await targetElement.isPresent();
    }

    static async isElementContainsText(el: ElementFinder, text: string) {
        var EC = protractor.ExpectedConditions;
        return await browser.wait(EC.textToBePresentInElement(el, text), 5000);
    }
    static getElementByStartsWithId(id: string) {
        return element(By.css(`[id^='${id}']`));
    }

    /**
     * @description
     * @param endsWith 
     */
    static getElementByEndWithId(endsWith: string) {
        return element(By.css(`[id$='${endsWith}']`));
    }

    /**
     * @description
     * @param text 
     * @param isContains 
     */
    static getElementByText(text: string, isContains = false) {
        return element(By.xpath(`//*[${ComponentHelpers.getXPathFunctionByText(text, isContains)}]`));
    }

    /**
     * @description
     * @param locator 
     */
    static async getElementsCount(locator: any) {
        return await element.all(locator).count();
    }

    /**
     * @description
     * @param locator 
     */
    static async scrollToElement(locator: any) {
        await browser.executeScript('arguments[0].scrollIntoView()', locator.getWebElement());
    }

    /**
     * @description
     */
    static async scrollDown() {
        await browser.executeScript('window.scrollTo(0,0);');
    }

    /**
     * @description
     * @param locator 
     */
    static async scrollToElementLocation(locator: any) {
        var location = await this.getLoate(locator)
        console.log(location)
        await browser.executeScript('window.scrollTo(' + location[0] + ',' + location[1] + ');')
    }

    /**
     * @description
     */
    public static getElementsOrWait() {
        return browser.wait(this.EC.visibilityOf(element(by)), 30000)
            .then(() => element.all(by));
    }

    /**
  * 
  * @param array Enter the Array
  * @param name Enter the name of parameter
  */
    static async verifyArrayContainsElement(array: any, name: string) {
        var value = false;
        for (let index = 0; index < array.length; index++) {
            if (array[index] == name) {
                value = true;
                break;
            }
            else {
                value = false;
            }
        }
        return value;

    }

    /**
     * 
     * @param element Enter the element locator
     */
    static async getLoate(element: ElementFinder) {
        var x1, y1;
        await element.getLocation().then(function (location) {
            x1 = location.x;
            y1 = location.y;
            console.log('x : ', x1, ', y : ', y1)
        });
        // await browser.actions().mouseMove({ x: x1, y: y1})
        return [x1, y1]
    }


    /**
     * 
     * @param timeout 
     */
    static async waitForPageLoad(timeout = PageHelper.DEFAULT_TIMEOUT) {
        await browser.wait(browser.executeScript("return document.readyState").then(async (text) => {
            console.log(text + '++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
            return await text == "complete"
        }), timeout);
        await browser.waitForAngular();
    }
}
