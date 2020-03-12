import { ArrayUtils } from "../../../components/misc-utils/array-utilities";
import { CartPageLocator } from "./cart-page-po";
import { browser } from "protractor";
import { LoginPageHelper } from "../login/login-page.helper";
import { LoginPageConstants } from "../login/login-page.constants";
import { ElementHelper } from "../../../components/html/element-helper";
import { TextboxHelper } from "../../../components/html/textbox-helper";
import { CommonPageHelper } from "../common/common-page.helper";
import { HtmlHelperFactory } from "../../../components/misc-utils/html-helper.factory";
import { CartPageConstant } from "./cart-page-constants";

export class CartPageHelper {

    /**
 * @description Get the list of items in the cart
 */
    static async getCartListItems() {
        var items = await ArrayUtils.getListWithHiddenText(CartPageLocator.getCartListItems);
        await browser.sleep(2000)
        return items;
    }

    /**
     * @description Get the list of items in the cart
     */
    static async getCartListItemsWhishlist() {
        var items = await ArrayUtils.getListWithHiddenText(CartPageLocator.getCartListItemsWhishlist);
        await browser.sleep(2000)
        return items;
    }

    /**
     * @description Clear all the items from the cart
     */
    static async resetCart() {
        //Click on the top links
        await LoginPageHelper.selectTopLinks(LoginPageConstants.userDropValueConstant.ShoppingCart)

        //Get the Items in the cart
        const items = await this.getCartListItems();
        if (items.length >= 0) {
            // await items.forEach(async (element) => {
            //     await browser.sleep(3000)

            //     //clear the item in cart
            //     await ElementHelper.click(CartPageLocator.clearCart(element));
            // });
            for (let index = 0; index < items.length; index++) {
                //clear the item in cart
                await ElementHelper.click(CartPageLocator.clearCart(items[index]));
                await browser.sleep(3000)
            }
        }

    }

    /**
     * @description Clear all the items from the cart
     */
    static async resetCartWishlist() {
        //Click on the top links
        await LoginPageHelper.selectTopLinks(LoginPageConstants.userDropValueConstant.WishList)

        //Get the Items in the cart
        const items = await this.getCartListItemsWhishlist();
        if (items.length >= 0) {
            // await items.forEach(async (element) => {
            //     await browser.sleep(3000)

            //     //clear the item in cart
            //     await ElementHelper.click(CartPageLocator.clearCart(element));
            // });
            for (let index = 0; index < items.length; index++) {
                //clear the item in cart
                await ElementHelper.click(CartPageLocator.clearCartWishList(items[index]));
                await browser.sleep(3000)
            }
        }

    }

    /**
     * @description Search for the item in the Applicaton
     * @param search Enter the String in the Search
     */
    static async enterSearchString(search: string) {
        await TextboxHelper.sendKeys(CartPageLocator.searchForItem, search)
    }

    /**
     * @description Verify that searched item is displayed or not
     * @param itme Enter the Searched item to verify
     */
    static async verifySearchedItemDisplayed(itme: string) {
        //Verify item is searched or not
        await expect(await ArrayUtils.getListText(CartPageLocator.getSearchListItems)).toContain(itme)
    }

    /**
     * @description Click on Add To Cart Item to Add the Item
     * @param item Enter the Item name
     */
    static async addToCartItem(item: string) {
        //Click on add To cart of the Item
        await ElementHelper.click(CartPageLocator.addToCart(item))

        //Verriy item is added to the card message is displayed
        await CommonPageHelper.verifyAddToCartSucess();
    }

    /**
     * @description Click on Add To Cart Item to Add the Item
     */
    static async addToCartItemSearched() {
        //Click on add To cart of the Item
        await ElementHelper.click(CartPageLocator.addToCartSearched)

        //Verriy item is added to the card message is displayed
        await CommonPageHelper.verifyAddToCartSucess();
    }

    /**
     * @description Verify that item is added to the Cart
     * @param item Enter the Item name
     */
    static async verifyItemInCart(item: string) {
        //Click on the top links
        await LoginPageHelper.selectTopLinks(LoginPageConstants.userDropValueConstant.ShoppingCart)

        //Get the Items in the cart
        await expect(await this.getCartListItems()).toContain(item, "Item is not in the Cart");
    }

    /**
     * @description Get and verify the Count of item in cart
     * @param item Enter the Item Name
     */
    static async getItemCountInCart(item: string, size: string) {
        //Get the Count of item in Cart
        const sizeMatch = await ElementHelper.getAttributeValue(CartPageLocator.getItemCount(item), HtmlHelperFactory.attributes.size);

        //Vierfy the Count of item in cart
        await expect(size).toEqual(sizeMatch, 'Size is not equal')
    }

    /**
     * @description clcik on item button
     */
    static async clickOnItemButton() {
        await browser.sleep(2000)
        //click on item button
        await ElementHelper.click(CartPageLocator.itemButton)
    }

    /**
     * @description Get the List of items in the Item Button Drop downs
     */
    static async getListItemButtonDrop() {
        await browser.sleep(2000)
        //get the List of items in the Cart Button List
        return await ArrayUtils.getListText(CartPageLocator.getItemButtonList);
    }

    /**
     * @description click on checkout loctor in Item drop
     */
    static async clickItemDropCheckout() {
        //click on checkout in item drop
        await ElementHelper.click(CartPageLocator.itemDropCheckout);
    }


    /**
     * @description click on wish list
     */
    static async clickOnWishList() {
        //click on add WishList
        await ElementHelper.click(CartPageLocator.addWishList);

        //Verriy item is added to the card message is displayed
        await CommonPageHelper.verifyAddToCartSucess();
    }


    /**
     * @description Verify existing address is checked
     */
    static async verifyExistingAddressChecked() {
        //Verify existing address is checked
        await expect(await ElementHelper.getAttributeValue(CartPageLocator.existingAddress, HtmlHelperFactory.attributes.checked)).toEqual('true', 'Existing Address is not checked')
    }

    /**
     * @description Verify existing address is checked
     */
    static async verifyShippingAddressChecked() {
        //Verify existing address is checked
        await expect(await ElementHelper.getAttributeValue(CartPageLocator.shippingAddress, HtmlHelperFactory.attributes.checked)).toEqual('true', 'Existing Address is not checked')
    }


    /**
    * @description Verify shipping Method is checked
    */
    static async verifyShippingMEthodChecked() {
        //Verify existing address is checked
        await expect(await ElementHelper.getAttributeValue(CartPageLocator.shippingMethod, HtmlHelperFactory.attributes.checked)).toEqual('true', 'Existing Address is not checked')
    }


    /**
    * @description Verify payment method is checked
    */
    static async verifyPaymentMethodChecked() {
        //Verify existing address is checked
        await expect(await ElementHelper.getAttributeValue(CartPageLocator.paymentMethod, HtmlHelperFactory.attributes.checked)).toEqual('true', 'Existing Address is not checked')
    }

    /**
     * @description click on payment continue button
     */
    static async clickPaymentContinueButton(button: string) {
        await ElementHelper.click(CartPageLocator.paymentContinue(button));
    }

    /**
    * @description click on Terms and Condition Checkbox
    */
    static async clickTermsAndCondition() {
        await ElementHelper.click(CartPageLocator.termsAndCondtion);
    }

    /**
     * @description Select the Guest account
     */
    static async selectGuestAccount() {
        await ElementHelper.click(CartPageLocator.guestAccount)
    }

    static async fillGuestUserDetails(firstname: string, lastname: string, email: string, telephone: string, company: string, address_1: string, address_2: string, city: string, postcode: string,
        country_id: string, zone_id: string) {
        //Enter the First Name
        await TextboxHelper.sendKeys(CartPageLocator.guestFillForm(CartPageConstant.formDetails.firstname), firstname)

        //Enter Last Name
        await TextboxHelper.sendKeys(CartPageLocator.guestFillForm(CartPageConstant.formDetails.lastname), lastname)

        //Enter Email
        await TextboxHelper.sendKeys(CartPageLocator.guestFillForm(CartPageConstant.formDetails.email), email)

        //Enter Telephone
        await TextboxHelper.sendKeys(CartPageLocator.guestFillForm(CartPageConstant.formDetails.telephone), telephone)

        //Enter company
        await TextboxHelper.sendKeys(CartPageLocator.guestFillForm(CartPageConstant.formDetails.company), company)

        //Enter Address1
        await TextboxHelper.sendKeys(CartPageLocator.guestFillForm(CartPageConstant.formDetails.address_1), address_1)

        //Enter Address2
        await TextboxHelper.sendKeys(CartPageLocator.guestFillForm(CartPageConstant.formDetails.address_2), address_2)

        //Enter City
        await TextboxHelper.sendKeys(CartPageLocator.guestFillForm(CartPageConstant.formDetails.city), city)

        //Enter postcode
        await TextboxHelper.sendKeys(CartPageLocator.guestFillForm(CartPageConstant.formDetails.postcode), postcode)

        //Enter country id
        await ElementHelper.click(CartPageLocator.guestFillForm(CartPageConstant.formDetails.country_id))

        //Select the country
        await ElementHelper.click(CartPageLocator.selectDropValue(country_id))

        //Enter Zone id
        await ElementHelper.click(CartPageLocator.guestFillForm(CartPageConstant.formDetails.zone_id))

        //Select the country
        await ElementHelper.click(CartPageLocator.selectDropValue(zone_id))
    }

    /**
     * @description Verify that item is added to the Cart
     * @param item Enter the Item name
     */
    static async clickOnWishListAdded(item: string) {
        //Click on the top links
        await LoginPageHelper.selectTopLinks(LoginPageConstants.userDropValueConstant.WishList)

        //Get the Items in the cart
        await expect(await this.getCartListItemsWhishlist()).toContain(item, "Item is not in the Cart");

    }

}