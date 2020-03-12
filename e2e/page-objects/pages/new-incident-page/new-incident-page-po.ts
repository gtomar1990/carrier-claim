import { By } from "selenium-webdriver"
import { element } from "protractor"

export class NewIncidentPageLocator {

    /**
     * @description get the Incident Number label
     */
    static get incidentNumberLabel() {
        return element(By.xpath('//div[@class="row responsive"]/div/p[text()="Incident Number:"]'))
    }

    /**
     * @description get the Incident Number
     */
    static get incidentNumber() {
        return element(By.xpath('//div[@class="row responsive"]/div/p/label[contains(text(), "INC")]'))
    }

    /**
     * @description get the New Incident Button
     */
    static get newIncidentButton() {
        return element(By.xpath('//a[text()="New Incident"]'))
    }

    /**
      * @description get the Reported By Textbox
      */
    static get reportedByTextbox() {
        return element(By.css('[id = "CallerName"]'))
    }

    /**
          * @description get the Employee Id Textbox
          */
    static get employeeIdTextbox() {
        return element(By.css('[id="EmployeeId"]'))
    }

    /**
         * @description get the Customer Account # Textbox
         */
    static get customerAccountNumberTextbox() {
        return element(By.css('[id="CustomerAccountNumber"]'))
    }

    /**
         * @description get the Date Of Call Textbox
         */
    static get dateOfCallTextbox() {
        return element(By.css('[id="CallDate"]'))
    }

    /**
         * @description get the Incident Date Textbox
         */
    static get incidentDateTextbox() {
        return element(By.css('[id="DateIncident"]'))
    }

    /**
         * @description get the Reason For Incident Dropdown
         */
    static get reasonForIncidentDropdown() {
        return element(By.css('[name="ReasonForCallId"]'))
    }

    /**
         * @description get the Report Taken By Dropdown
         */
    static get reportTakenByDropdown() {
        return element(By.css('[id="UserIdReportTakenBy"]'))
    }

    /**
         * @description get the Time Of Call Textbox
         */
    static get timeOfCallTextbox() {
        return element(By.css('[id="CallTime"]'))
    }

    /**
         * @description get the Time Of Incident Textbox
         */
    static get timeOfIncidentTextbox() {
        return element(By.css('[id="IncidentTime"]'))
    }

    /**
       * @description get the Incident Status Dropdown
       */
    static get incidentStatusDropdown() {
        return element(By.css('[name="IncidentStatusCodeId"]'))
    }

    /**
       * @description get the BOL Date Textbox
       */
    static get bolDateTextbox() {
        return element(By.css('[id="BillOfLadingDate"]'))
    }

    /**
     * @description get the Delivery Date Textbox
     */
    static get deliveryDateTextbox() {
        return element(By.css('[id="DeliveryDate"]'))
    }

    /**
    * @description get the PO Number Textbox
    */
    static get poNumberTextbox() {
        return element(By.css('[id="Ponumber"]'))
    }

    /**
    * @description get the Description Of Incident Textbox
    */
    static get descriptionOfIncidentTextbox() {
        return element(By.css('[id="DescriptionOfIncident"]'))
    }

    /**
    * @description get the Save Button
    */
    static get saveButton() {
        return element(By.css('[id="btnSaveClaim"]'))
    }

    /**
   * @description get the Delete Button
   */
    static get deleteButton() {
        return element(By.xpath('//a[text()="Delete"]'))
    }

    /**
    * @description get the Print Button
    */
    static get printButton() {
        return element(By.css('[id="btnPrintPDF"]'))
    }

    /**
   * @description get the Email Button
   */
    static get emailButton() {
        return element(By.xpath('//a[text()="Email"]'))
    }

    /**
   * @description get the Close Button
   */
    static get closeButton() {
        return element(By.xpath('//a[text()="Close"]'))
    }

    /**
    * @description New Incident created verification message
    */
    static get verificationMessage() {
        return element(By.xpath('//div[contains(text(), "Incident successfully saved!")]'))
    }

    /**
    * @description get the Ok Button
    */
    static get okButton() {
        return element(By.css('[id = "btnOk"]'))
    }

}