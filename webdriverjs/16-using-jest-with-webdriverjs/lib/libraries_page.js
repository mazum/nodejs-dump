var Page = require('./base_page');
var locator = require('../utils/locators');
var libraryItem = locator.libraryItem;
var libraryName = locator.nameInput;
var libraryAddress = locator.addressInput;
var libraryPhone = locator.phoneInput;
var createBtn = locator.createBtn;
var libraryContainer = locator.libraryContainer;
var inputFilter= locator.inputFilter;

//List Libraries
Page.prototype.listLibraries = function () {
    return this.findAll(libraryItem);
}

//Add Libraries
Page.prototype.addLibrary = function (desiredName) {
    var fakeLibraryName;
    if(desiredName){
        fakeLibraryName=desiredName;
    }else{
        fakeLibraryName = this.fake().libraryName;
    }
    var fakeLibraryAddress = this.fake().address;
    var fakeLibraryPhone = this.fake().phone;
    this.findLink('Add new').click();
    this.write(libraryName, fakeLibraryName);
    this.write(libraryAddress, fakeLibraryAddress);
    this.write(libraryPhone, fakeLibraryPhone);
    this.findXpath(createBtn).click();
    return {
        libraryList: this.find(libraryContainer).getText(),
        libraryName: fakeLibraryName
    }
}

//Sort Libraries
Page.prototype.filterLibraries = function () {
    var newLibrary = this.fake().libraryName;
    this.addLibrary(newLibrary);
    this.write(inputFilter, newLibrary);
    return{
        libraryList: this.find(libraryContainer).getText(),
        libraryName: newLibrary
    }
}

module.exports = Page;