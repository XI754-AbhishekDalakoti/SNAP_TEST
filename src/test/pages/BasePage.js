var BasePage = function(){

    this.navigateToURL = function(){

        browser.driver.get(url);

    };

    this.getPageTitle = function(){

        return browser.driver.getTitle();

    }
};
module.exports = new BasePage();