import { browser } from "protractor";
import { StringUtils } from "./string-utils";
// import { TestModuleNames } from "../../test-suites/helpers/test-module";

var TestRail = require("testrail-promise");

export class TestRailUtils {

    /**
     * Create TestRail object and update report in test rail
     * @param name : name of test cases
     * @param errorLength : length of error message
     */
    static async  reportToTestRail(name: string, errorLength: number) {
        var tr = new TestRail(browser.params.test_rail_url, browser.params.test_rail_user,
            browser.params.test_rail_password);
        var obj = {
            "project_name": browser.params.test_rail_project,
            "plan_name": browser.params.test_rail_test_plan,
            "section_name": 'NULL',
            "case_id": await StringUtils.getTestCaseId(name),
            "status_name": (errorLength === 0 ? "passed" : "failed")

        };
        return await tr.ifNeededCreateThenAddResultForCase(obj);
    }
}
