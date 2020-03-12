import {ElementFinder} from 'protractor';
import {WaitHelper} from './wait-helper';

export class CheckboxHelper {

    /**
     * Check check box field
     * @param {ElementFinder} element
     * @param {boolean} markChecked
     * @returns {Promise<void>}
     */
    static async markCheckbox(element: ElementFinder, markChecked: boolean) {
        await WaitHelper.getInstance().waitForElementToBeClickable(element);
        const isSelected = await element.isSelected();
        if (isSelected !== markChecked) {
            await element.click();
        }
        return;
    }

    /**
     * Is check box selected
     * @param {ElementFinder} element
     * @returns {Promise<void>}
     */
    static async isCheckBoxSelected(element: ElementFinder){
        await WaitHelper.getInstance().waitForElementToBeClickable(element);
        return await element.isSelected();
    }
}
