var { describe, it, after, before} = require('selenium-webdriver/testing');
var Page = require('../lib/home_page');
var page;

describe('library app scenarios', function () {
    this.timeout(50000);

    beforeEach(function () {
        page = new Page();
        page.driver.manage().window().maximize();
        page.visit('http://library-app.firebaseapp.com');
    });

    afterEach(function () {
       page.quit();
    });

    it('Typing valid email changes opacity to 1', function () {
        page.requestBtn();
    });

    it('Typing a valid email enables request button', function () {
        page.requestBtn();
    });

    it('Clicking Request invitation triggers a confirmation alert', function () {
        page.alertSuccess();
    });
});