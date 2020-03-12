import { element } from "protractor"
import { By } from "selenium-webdriver"

export class CartPageLocator {

    /**
     * @description Get the List of Items in the Cart
     */
    static get getCartListItems() {
        return '//*[@class="table table-bordered"]//*[@class="text-left"]/a'
    }

    /**
     * @description Get the List of Items in the Cart
     */
    static get getCartListItemsWhishlist() {
        return '//*[@class="table table-bordered table-hover"]//*[@class="text-left"]/a'
    }

    static get getSearchListItems() {
        return '//*[@class="product-thumb"]//*[@class="caption"]//a'
    }

    /**
     * @description Clear the item form the cart
     * @param itemName Enter the Item Name
     */
    static clearCart(itemName: string) {
        return element(By.xpath('//tr[td//a[text()="' + itemName + '"]]//*[@class="fa fa-times-circle"]'))
    }

    /**
     * @description Clear the item form the cart
     * @param itemName Enter the Item Name
     */
    static clearCartWishList(itemName: string) {
        return element(By.xpath('//tr[td//a[text()="' + itemName + '"]]//*[@class="fa fa-times"]'))
    }

    /**
     * @description Search for the Item 
     */
    static get searchForItem() {
        return element(By.css('[class="input-group"] [name="search"]'))
    }

    /**
     * @description Click on search button
     */
    static get searchButton() {
        return element(By.css('[class="btn btn-default btn-lg"]'))
    }

    /**
     * @description Add To Cart Item
     * @param item Enter the Item name
     */
    static addToCart(item: string) {
        return element(By.xpath('//div[//div//h4//a[text()="' + item + '"]]//*[@class="hidden-xs hidden-sm hidden-md"][text()="Add to Cart"]'))
    }

    /**
     * @description Add To Cart Item
     */
    static get addToCartSearched() {
        return element(By.css('[id="button-cart"]'))
    }

    /**
     * @description item button 
     */
    static get itemButton() {
        return element(By.css('[id="cart-total"]'))
    }

    /**
     * @description Get the Item Count in the Cart
     * @param item Enter item name
     */
    static getItemCount(item: string) {
        return element(By.xpath('//tr[td//a[text()="' + item + '"]]//*[@name="quantity[156]"]'))
    }

    /**
     * @description get the List of items in the Item Button
     */
    static get getItemButtonList() {
        return ('//*[@class="table table-striped"]//*[@class="text-left"]/a');
    }

    /**
     * @description get the checkout in the Item button drop
     */
    static get itemDropCheckout() {
        return element(By.css('[class="dropdown-menu pull-right"] [class="fa fa-share"]'))
    }

    /**
    * @description add item to the wishlist
    */
    static get addWishList() {
        return element(By.xpath('(//*[@class="fa fa-heart"])[2]'))
    }

    /**
     * @description Payment Existing address
     */
    static get existingAddress() {
        return element(By.xpath('(//*[@name="payment_address"])[1]'))
    }

    /**
     * @description shipping address
     */
    static get shippingAddress() {
        return element(By.xpath('(//*[@name="shipping_address"])[1]'))
    }

    /**
     * @description Shipping method
     */
    static get shippingMethod() {
        return element(By.css('[name="shipping_method"]'))
    }

    /**
   * @description Payment method
   */
    static get paymentMethod() {
        return element(By.css('[name="payment_method"]'))
    }

    /**
     * @description Get payment Continue button
     */
    static paymentContinue(text: string) {
        return element(By.css('[id="' + text + '"]'))
    }

    /**
     * @description Terns and condition locator
     */
    static get termsAndCondtion() {
        return element(By.xpath('//b[text()="Terms & Conditions"]/parent::a[@class="agree"]/following-sibling::input[@type="checkbox"]'))
    }

    /**
     * @description get the List of items in the Confirm order
     */
    static get getConfirmOrderList() {
        return element(By.xpath('//*[@class="table table-bordered table-hover"]//*[@class="text-left"]/a'));
    }

    /**
     * @description Select the Guest Account
     */
    static get guestAccount() {
        return element(By.css('[value="guest"]'))
    }

    /**
     * @description Guest form fill up
     */
    static guestFillForm(text: string) {
        return element(By.xpath('//*[@id="account"]//*[@name="' + text + '"]  | //*[@id="address"]//*[@name="' + text + '"]'))
    }

    /**
     * 
     * @param text Enter the Drop down value
     */
    static selectDropValue(text: string) {
        return element(By.xpath('//*[text()="' + text + '"]'))
    }
}