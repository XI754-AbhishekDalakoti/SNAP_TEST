var LoginPage=function () {

    this.credentials = function () {

        element(by.cssSelector("[name$=me]")).sendKeys('snap-test-auto-normal-ct-xebia');
        element(by.cssSelector("[name$=rd]")).sendKeys('Tribune!1');
         element(by.cssSelector("//button[class='btn meta-btn']")).click();
    };

};

module.exports = new LoginPage();;