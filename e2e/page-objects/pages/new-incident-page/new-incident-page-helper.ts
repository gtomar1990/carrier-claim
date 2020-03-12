import { NewIncidentPageLocator } from "./new-incident-page-po";
import { WaitHelper } from "../../../components/html/wait-helper";
import { PageHelper } from "../../../components/html/page-helper";
import { TextboxHelper } from '../../../components/html/textbox-helper';
import { DropDownHelper } from "../../../components/html/dropdown-helper";
import { ElementHelper } from "../../../components/html/element-helper";

export class NewIncidentPageHelper {

    /**
    * @description Verify New Incident button
    */
    static async verifyNewIncidentScreen() {
        //Wait for element to be visible
        await WaitHelper.getInstance().waitForElement(NewIncidentPageLocator.incidentNumberLabel, PageHelper.timeout.xs, "Element is not visible");
    }

    /**
    * @description Filling the fields to create a new incident
    */
    static async fillIncidentForm() {
        //Enter the Reported By
        await TextboxHelper.sendKeys(NewIncidentPageLocator.reportedByTextbox, "Mike Hanson")

        //Enter Employee Id
        await TextboxHelper.sendKeys(NewIncidentPageLocator.employeeIdTextbox, "ASDF")

        //Enter Customer Account Number
        await TextboxHelper.sendKeys(NewIncidentPageLocator.customerAccountNumberTextbox, "20013001")

        //Enter Date Of Call
        await TextboxHelper.sendKeys(NewIncidentPageLocator.dateOfCallTextbox, "03/12/2020")

        //Enter Incident Date
        await TextboxHelper.sendKeys(NewIncidentPageLocator.incidentDateTextbox, "03/12/2020")

        //Enter Reason For Incident
        await DropDownHelper.selectOptionByText(NewIncidentPageLocator.reasonForIncidentDropdown, "Damage")

        //Enter Report Taken By
        await DropDownHelper.selectOptionByText(NewIncidentPageLocator.reportTakenByDropdown, "DreamOrbit User #1")

        //Enter Time Of Call
        await TextboxHelper.sendKeys(NewIncidentPageLocator.timeOfCallTextbox, "1200")

        //Enter Time Of Incident
        await TextboxHelper.sendKeys(NewIncidentPageLocator.timeOfIncidentTextbox, "1100")

        //Enter Incident Status
        await DropDownHelper.selectOptionByText(NewIncidentPageLocator.incidentStatusDropdown, "Open")

        //Select Bol Date
        await TextboxHelper.sendKeys(NewIncidentPageLocator.bolDateTextbox, "03/12/2020")

        //Enter Delivery Date
        await TextboxHelper.sendKeys(NewIncidentPageLocator.deliveryDateTextbox, "03/12/2020")

        //Select Po Number
        await TextboxHelper.sendKeys(NewIncidentPageLocator.poNumberTextbox, "14499")

        //Enter Description Of Incident
        await TextboxHelper.sendKeys(NewIncidentPageLocator.descriptionOfIncidentTextbox, "Test")
    }

    /**
    * @description Click on Save button
    */
    static async clickOnSaveButton() {
        //click on save button
        await ElementHelper.click(NewIncidentPageLocator.saveButton)
    }

    /**
    * @description Verify incident app message
    */
    static async verifyConfirmationMessage() {
        //Wait for element to be visible
        await WaitHelper.getInstance().waitForElement(NewIncidentPageLocator.verificationMessage, PageHelper.timeout.s, "Element is not visible");
    }

    /**
        * @description Click on Ok button
        */
    static async clickOnOkButton() {
        //click on ok button
        await ElementHelper.click(NewIncidentPageLocator.okButton)
    }

    /**
    * @description Verify incident number appears
    */
    static async verifyIncidentNumber() {
        //Wait for element to be visible
        await WaitHelper.getInstance().waitForElement(NewIncidentPageLocator.incidentNumber, PageHelper.timeout.m, "Element is not visible");
    }

}