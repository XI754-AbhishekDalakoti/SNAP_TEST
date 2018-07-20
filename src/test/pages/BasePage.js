var BasePage = function(){

    this.navigateToURL = function(){

        browser.driver.get("https://snap-latimes-stage.tribdev.com/login");

    };

    this.getPageTitle = function(){

        return browser.driver.getTitle();

    }
};
module.exports = new BasePage();