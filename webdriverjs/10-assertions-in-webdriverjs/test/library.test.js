var webdriver = require ('selenium-webdriver'),
    { describe, it, after, before} = require('selenium-webdriver/testing'),
    By = webdriver.By,
    assert = require('assert'),
    until = webdriver.until;
var driver;
var find;

describe('library app scenarios', function () {
    this.timeout(50000);
    beforeEach(function () {
        driver = new webdriver.Builder().forBrowser('chrome').build();
        driver.get('http://library-app.firebaseapp.com');
    });

    afterEach(function () {
        driver.quit();
    });

    it('Changes Button opacity upon email being filled out', function () {
        var submitBtn = driver.findElement(By.css('.btn-lg'));
        driver.findElement(By.css('input')).sendKeys('us@fakemail.com');
        return submitBtn.getCssValue('opacity').then(function (result) {
            assert(result === '1');
        });
    });

    it('submitting email shows an alert', function () {
        var submitBtn = driver.findElement(By.css('.btn-lg'));
        driver.findElement(By.css('input')).sendKeys('us@fakemail.com');
        submitBtn.click();
        driver.wait(until.elementLocated(By.css('.alert-success')), 5000);
        driver.findElements(By.css('.alert-success')).then(function (results) {
            //assert(results.length === 2, results.length + ' alert-success were found');
            assert.equal(results.length, 1, results.length + ' alert-success were found');
        });
    });

    it('Shows a navbar', function () {
        driver.findElements(By.css('nav')).then(function (results) {
            assert.equal(results.length, 1);
        });
    });
});
