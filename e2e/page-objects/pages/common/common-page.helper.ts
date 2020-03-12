import { ElementHelper } from "../../../components/html/element-helper";
import { CommonPage } from "./common.po";

export class CommonPageHelper {

    /**
     * @description Verfiy ADD to cart message is displayed
     */
    static async verifyAddToCartSucess() {
        await expect(await ElementHelper.isElementDisplayed(CommonPage.SuccesMessage)).toBe(true, "Add to cart is not displayed")
        
    }


    /**
     * @description open the searched item
     * @param item Enter the Item name
     */
    static async openSearhedItem(item: string) {
        //open the searched item
        await ElementHelper.click(CommonPage.searchedItem(item))
    }

    /**
     * @description Verify that Searched item when open is same or not
     * @param item Enter the Item Name
     */
    static async verifyOpenSearchedItemDisplayed(item: string) {
        await expect(await ElementHelper.getText(CommonPage.openSearchedItem)).toEqual(item, "Open Search Item is not equal")
    }
}