
var HtmlReporter = require('protractor-beautiful-reporter');
var fs = require('fs-extra');
var path = require('path');
var log4js = require('log4js');
var downloadsPath = path.resolve(__dirname, './downloads');
var TeamCityReporter = require('jasmine-reporters').TeamCityReporter;

//dynamic function for the system user
var sysUser = require("os").userInfo().username;
if (sysUser == 'SYSTEM') {
    sysUser = 'sali';
}

exports.config = {
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine2',
    directConnect: true,
    allScriptsTimeout: 1500000,

    capabilities: {
        'browserName': 'chrome',
        chromeOptions: {
            args: [
                "user-data-dir=C:\\Users\\" + sysUser + "\\AppData\\Local\\Google\\Chrome\\User Data\\Default",
            ],
            prefs: {
                download: {
                    'prompt_for_download': false,
                    'directory_upgrade': true,
                    'default_directory': downloadsPath,
                }
            },
        },
    },

    reporters: [
        ['allure', {
            outputDir: './_results_/allure-raw',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
        }],
    ],

    baseUrl: "https://dev.myezclaim.com/carrierclaim/loginCarrier.html",

    // Spec patterns are relative to the location of the spec file. They may include glob patterns.
    suites: {

        CartPage: [
            './temp/e2e/test-suites/carrier-claim/carrier-claim.e2e.js',
        ],

    },

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        isVerbose: true,
        showColors: true, // Use colors in the command line report.
        includeStackTrace: false,
        defaultTimeoutInterval: 2400000
        //Increase the default jasmine time interval.
    },

    params: {
        user_name: 'doadmin',
        user_password: 'Bailey!3579',
        report: 'result',
        downloadFolderPath: downloadsPath,
        waitForAngular: {
            angularFlag: false,  //Only use false if timeout/interval for polling is failing.
            angularDelay: 40000 //this only goes into affect if angularFlag=false
        }
    },

    beforeLaunch: function () {
        if (fs.existsSync('./logs/ExecutionLog.log')) {
            fs.unlink('./logs/ExecutionLog.log')
        }
        log4js.configure({
            appenders: {
                "console": {
                    "type": "console",
                    "category": "console",
                    "pattern": "%d{dd/MM hh:mm} %-5p %m",
                },
                'file':
                {
                    type: 'file',
                    filename: './logs/ExecutionLog.log'
                }
            },
            categories: {
                default: {
                    appenders: ['file', 'console'],
                    level: 'debug'
                },
                console: { "appenders": ['console'], "level": "INFO" }
            }
        });
    },

    onPrepare: function () {
        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        browser.waitForAngular();
        browser.manage().timeouts().pageLoadTimeout(40000);
        browser.manage().timeouts().implicitlyWait(40000);

        // Set log4js onbject with browser
        browser.logger = log4js.getLogger('AutomationTest');

        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));


        jasmine.getEnv().afterEach(function (done) {
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });

        // New Report protractor-beautiful-reporter
        // Add a screenshot reporter:
        jasmine.getEnv().addReporter(new HtmlReporter({
            preserveDirectory: false,
            takeScreenShotsOnlyForFailedSpecs: true,
            screenshotsSubfolder: 'images',
            jsonsSubfolder: 'jsons',
            baseDirectory: 'testResult',
            docTitle: 'IMS-Web Automation Test Execution Report', // Add title for the html report
            docName: 'TestResult.html', // Change html report file name
            gatherBrowserLogs: false, // Store Browser logs
            pathBuilder: function pathBuilder(spec, descriptions, results, capabilities) {
                // Return '<30-12-2016>/<browser>/<specname>' as path for screenshots:
                // Example: '30-12-2016/firefox/list-should work'.
                var currentDate = new Date(),
                    day = currentDate.getDate(),
                    month = currentDate.getMonth() + 1,
                    year = currentDate.getFullYear();

                var validDescriptions = descriptions.map(function (description) {
                    return description.replace('/', '@');
                });

                return path.join(
                    day + "-" + month + "-" + year);
            }
        }).getJasmine2Reporter());

        // Jamines for logger to capture spec name and description with exception log
        var myReporter = {
            jasmineStarted: function (suiteInfo) {
                browser.logger.info('Running suite with ' + suiteInfo.totalSpecsDefined);
            },

            suiteStarted: function (result) {
                browser.logger.info("=================================================");
            },

            specStarted: function (result) {
                browser.logger.info('Spec started: ' + result.fullName);
            },

            specDone: function (result) {
                browser.logger.info('Spec: ' + result.description + ' was ' + result.status);
                for (var i = 0; i < result.failedExpectations.length; i++) {

                    browser.logger.error('Failure: ' + result.failedExpectations[i].message);
                    browser.logger.error(result.failedExpectations[i].stack);
                }
                browser.logger.info(result.passedExpectations.length);
                browser.logger.info("=================================================");
            },

            suiteDone: function (result) {
                browser.logger.info('Suite: ' + result.description + ' was ' + result.status);
                for (var i = 0; i < result.failedExpectations.length; i++) {
                    browser.logger.error('AfterAll ' + result.failedExpectations[i].message);
                    browser.logger.error(result.failedExpectations[i].stack);
                }
            },
            jasmineDone: function () {
                browser.logger.info('Finished suite');
            }
        };
        jasmine.getEnv().addReporter(myReporter);
    },

    plugins: [{
        displayHelpUrl: true | false, // Displays the aXe help URL along with the error. Defaults to true. 
        displayContext: true | false, // Displays the HTML of interest. Defaults to true.
        displayPasses: true | false, // Display pass results. Defaults to true.
        displayViolations: true | false, // Display vioaltions. Defaults to true.
        standardsToReport: ['wcag2a', 'wcag2aa'], // A list of standards to report on. If empty, reports on all standards.
        ignoreAxeFailures: true | false, // If true, aXe failures won't cause the whole test to fail. Defaults to false
        package: 'protractor-axe-report-plugin',
        globalParams: {} // This is a configuration object, see below for more detail.
    }]
};