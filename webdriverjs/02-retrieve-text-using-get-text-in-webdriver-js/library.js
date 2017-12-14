var webdriver = require ('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get('http://library-app.firebaseapp.com');

driver.findElement(By.css('input'));
driver.findElement(By.css('.btn-lg')).getText().then(function (txt) {
    console.log("The text of the button:  " + txt);
});
//driver.findElement(By.css('.alert-success'));
driver.findElements(By.css('nav li')).then(function (elements) {
    elements.map(function (el) {
        el.getText().then(function (txt) {
            console.log("The text of the navbar element is: " + txt);
        });
    });
});




//driver.sleep(10000);
driver.quit();
