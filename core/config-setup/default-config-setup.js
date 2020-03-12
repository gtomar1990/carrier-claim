var HtmlReporter = require('protractor-beautiful-reporter');
var fs = require('fs-extra');
var path = require('path');
var log4js = require('log4js');
var HtmlReporter = require('protractor-beautiful-reporter');
var downloadsPath = path.resolve(__dirname, './downloads');

const configSetup = {

    framework: 'jasmine2',
    directConnect: true,

    capabilities: {
        'browserName': 'chrome',
        chromeOptions: {
            args: ["user-data-dir=C:\\Users\\sali\\AppData\\Local\\Google\\Chrome\\User Data\\Default"],
            prefs: {
                download: {
                    'prompt_for_download': false,
                    'directory_upgrade': true,
                    'default_directory': downloadsPath
                }
            }
        },
    },

    baseUrl: 'http://optomastrunk.northpointfs.local:8081/northpoint/login.html',

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
        includeStackTrace: true,
        defaultTimeoutInterval: 1440000
        //Increase the default jasmine time interval.
    },

    params: {
        user_name: 'skumar',
        user_password: '123',
        second_user_name: 'pkumar',
        second_user_password: '123',
        report: 'result',
        test_rail_url: 'https://testims.testrail.io',
        test_rail_user: 'sadika@360logica.com',
        test_rail_password: '!QAZ1qaz',
        test_rail_test_plan: "Sadik_Plan",
        test_rail_project: "IMS Web",
        downloadFolderPath: downloadsPath,
        waitForAngular: {
            angularFlag: false,  //Only use false if timeout/interval for polling is failing.
            angularDelay: 40000 //this only goes into affect if angularFlag=false
        }
    },

    onPrepare: function () {
        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        browser.manage().timeouts().pageLoadTimeout(40000);
        browser.manage().timeouts().implicitlyWait(40000);
    }

};
module.exports = configSetup;
