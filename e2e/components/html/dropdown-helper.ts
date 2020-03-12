import {by, By, element, ElementFinder} from 'protractor';

export class DropDownHelper {

    
    static selectOptionByVal(locator: ElementFinder, optionVal: string) {
        return locator.element(By.css(this.getCssForOptionValue(optionVal))).click();
    }

    static selectOptionByText(locator: ElementFinder, optionVal: string) {
        return locator.element(By.xpath(this.getXPathForOptionValue(optionVal))).click();
    }

    static getXPathForOptionValue(optionVal: string) {
        return `//option[normalize-space(.)="${optionVal}"]`;
    }

    static getCssForOptionValue(optionVal: string) {
        return `option[value="${optionVal}"]`;
    }

    static async selectDropDownByIndex(elementt: ElementFinder, optionNum: number) {
       if (optionNum) {
           const options = await elementt.findElements(by.tagName('option'));
           options[optionNum].click();
       }
    }

     static async currentSelectedOptionByText(text: string) {
        const selector = `//option[@selected="selected" and normalize-space(.)="${text}"]`;
        return element(By.xpath(selector));
    }
}
