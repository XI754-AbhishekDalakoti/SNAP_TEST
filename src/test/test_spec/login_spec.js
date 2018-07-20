describe('automating login page', function() {
    var baseObject = require('../pages/BasePage.js');
    var loginObject = require('../pages/LoginPage.js');

    it('non-angular page so ignore sync and active wait to load', function() {
        baseObject.navigateToURL();
    });

    it('should login the user', function() {
        loginObject.enterDetails();
    });
});