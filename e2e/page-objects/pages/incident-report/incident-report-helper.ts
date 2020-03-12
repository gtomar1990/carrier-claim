import { IncidentReportLocator } from "./incident-report-po";
import { ElementHelper } from "../../../components/html/element-helper";
import { WaitHelper } from "../../../components/html/wait-helper";
import { PageHelper } from "../../../components/html/page-helper";

export class IncidentReportHelper {

    /**
    * @description Click on New Incident button
    */
    static async clickOnNewIncidentButton() {
        //Wait for element to be clickable
        await WaitHelper.getInstance().waitForElementToBeClickable(IncidentReportLocator.newIncidentButton, PageHelper.timeout.xs, "Element not clickable");
        //Click on New Incident button
        await ElementHelper.click(IncidentReportLocator.newIncidentButton)
    }

}