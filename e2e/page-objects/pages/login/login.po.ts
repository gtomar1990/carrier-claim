import { BasePage } from '../base-page';
import { element } from 'protractor';
import { By } from 'selenium-webdriver';

export class LoginPage extends BasePage {
    url = '/';


    /**
     * @description Click to open drop Register/Login
     */
    static get userDrop() {
        return element(By.css('[class="fa fa-user"]'))
    }

    /**
     * @description Select the Login Value From the User Drop down Value
     */
    static userLoginIcon(dropValue: string) {
        return element(By.xpath('//*[@class="dropdown-menu dropdown-menu-right"]//*[text()="' + dropValue + '"]'))
    }

    /**
     * @description Login Page Input Box field Email and password
     * @param inputBox 
     */
    static loginInputBox(inputBox: string) {
        return element(By.css('[id = "' + inputBox + '"]'))
    }

    /**
     * @description Login Button
     */
    static get loginButton() {
        return element(By.xpath('//button[text()="Login"]'))
    }

    static topLinks(links: string) {
        return element(By.xpath('//*[@class="hidden-xs hidden-sm hidden-md"][contains(text(),"' + links + '")]'))
    }
}
