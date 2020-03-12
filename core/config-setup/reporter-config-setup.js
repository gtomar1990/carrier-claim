var HtmlReporter = require('protractor-beautiful-reporter');
var fs = require('fs-extra');
var path = require('path');
var log4js = require('log4js');
var HtmlReporter = require('protractor-beautiful-reporter');
var downloadsPath = path.resolve(__dirname, './downloads');

const reporterSetup = {

    beforeLaunch: function () {

        if (fs.existsSync('./logs/ExecutionLog.log')) {
            fs.unlink('./logs/ExecutionLog.log')
        }
        log4js.configure({
            appenders: {
                'file':
                {
                    type: 'file',
                    filename: './logs/ExecutionLog.log'
                }
            },
            categories: {
                default: {
                    appenders: ['file'],
                    level: 'debug'
                }
            }
        });
    },

    onPrepare: function () {
        // Set log4js onbject with browser
        browser.logger = log4js.getLogger('Test');

        jasmine.getEnv().addReporter({
            specDone: function (result) {
                if (result.status == 'failed') {
                    browser.getCapabilities().then(function (caps) {
                        var browserName = caps.get('browserName');
                        var screnshotName = result.fullName.split(":")[0]
                        browser.takeScreenshot().then(function (png) {
                            var stream = fs.createWriteStream('screenshots/' + browserName + '-' + screnshotName + '.png');
                            stream.write(new Buffer(png, 'base64'));
                            stream.end();
                        });
                    });
                }
            }
        });

        // New Report protractor-beautiful-reporter
        // Add a screenshot reporter:
        jasmine.getEnv().addReporter(new HtmlReporter({
            preserveDirectory: false,
            takeScreenShotsOnlyForFailedSpecs: true,
            screenshotsSubfolder: 'images',
            jsonsSubfolder: 'jsons',
            baseDirectory: 'reports-tmp',
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
                    day + "-" + month + "-" + year,
                    // capabilities.get('browserName'),
                    validDescriptions.join('-'));
            }
        }).getJasmine2Reporter());


        // Jamines for logger to capture spec name and description with exception log
        var myReporter = {
            jasmineStarted: function (suiteInfo) {
                browser.logger.info('Running suite with ' + suiteInfo.totalSpecsDefined);
            },

            suiteStarted: function (result) {
                browser.logger.info("=================================================");
                //browser.logger.info('Suite started: ' + result.description + ' whose full description is: ' + result.fullName);
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

};
module.exports = reporterSetup;
