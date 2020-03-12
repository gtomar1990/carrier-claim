import { By, element } from 'protractor';

export class ComponentHelpers {


    static getElementByTagAndText(tag: string, text: string, isContains = false) {
        console.log(this.getElementByTagXpath(tag, text, isContains));
        return element(By.xpath(this.getElementByTagXpath(tag, text, isContains)));
    }

    static getElementByTagXpath(tag: string, text: string, isContains = false) {
        return `//${tag}[${ComponentHelpers.getXPathFunctionByTextForDot(text, isContains)}]`;
    }

    static getXPathFunctionByText(text: string, isContains: boolean) {
        if (isContains)
            return "contains(text(), '" + text + "')"
        else
            return "text()='" + text + "'";
    }

    static getXPathFunctionByTextForDot(text: string, isContains = false) {
        if (isContains)
            return "contains(text, '" + text + "' )"
        else
            return "text()='" + text + "'";
    }


    /**
     * Get element by image src
     * @param src 
     */
    static getElementByImage(src: string) {
        return element(By.css("[src='" + src + "']"))
    }


    /**
     * Get element by image src
     * @param src 
     */
    static getElementByTitle(src: string) {
        return element(By.css("[title='" + src + "']"))
    }


    static getElementByLabelText(text: string, isContains = false) {
        if (isContains)
            return element(By.xpath("//label[text()='" + text + "']"));
        else
            return element(By.xpath("//label[contains(text(), '" + text + "')]"));


    }
}
