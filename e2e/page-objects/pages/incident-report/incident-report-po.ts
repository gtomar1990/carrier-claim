import { By } from "selenium-webdriver"
import { element } from "protractor"

export class IncidentReportLocator {

    /**
     * @description get the Incident Link
     */
    static get incidentLink() {
        return element(By.xpath('//a[text()="Incidents"]'))
    }

    /**
     * @description get the New Incident Button
     */
    static get newIncidentButton() {
        return element(By.xpath('//a[text()="New Incident"]'))
    }



}