//var { describe, it, after, before} = require('selenium-webdriver/testing');
var Page = require('../lib/home_page');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var should = chai.should();
var page;
chai.use(chaiAsPromised);


describe('library app scenarios: Home Page', function () {
    jest.setTimeout(50000);

    beforeEach(function () {
        page = new Page();
        page.driver.manage().window().maximize();
        page.visit('http://library-app.firebaseapp.com');
    });

    afterEach(function () {
       page.quit();
    });

    it('Typing valid email changes opacity to 1', function () {
        var btn = page.requestBtn();
        return btn.opacity.should.eventually.equal('1');
    });

    it('Typing a valid email enables request button', function () {
        var btn = page.requestBtn();
        return btn.state.should.eventually.be.true;
    });

    it('Clicking Request invitation triggers a confirmation alert', function () {
        var alert = page.alertSuccess();
        return alert.should.eventually.contain('Thank you!');
    });
});