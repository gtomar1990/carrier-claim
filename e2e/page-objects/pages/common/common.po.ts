import { element } from "protractor";
import { By } from "selenium-webdriver";

export class CommonPage {
    /**
     * @description success message
     */
    static get SuccesMessage() {
        return element(By.css('[class="alert alert-success alert-dismissible"]'))
    }

    /**
     * @description Select the Searched item
     * @param item Enter the Item Name
     */
    static searchedItem(item: string) {
        return element(By.xpath('//*[@class="product-thumb"]//*[@class="caption"]//a[text()="' + item + '"]'))
    }

    /**
     * @description get the title of the itme opened when searched
     */
    static get openSearchedItem() {
        return element(By.xpath('//*[@id="content"]//*[@class="col-sm-4"]//h1'))
    }
}
