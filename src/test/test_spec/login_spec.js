
describe('Verify the validity of  SNAP url', function() {
    var baseObject = require('../pages/BasePage.js');
    var loginObject = require('../pages/LoginPage.js');
    var jsonObject = require('../utilities/Xlsxtojson.js');

    it('user should be redirected to SNAP login page', function() {
        baseObject.navigateToURL();
    });
});

describe('Verify the login functionality with valid credentials', function() {
    var baseObject = require('../pages/BasePage.js');
    var loginObject = require('../pages/LoginPage.js');

    it('non-angular page so ignore sync and active wait to load', function() {
        baseObject.navigateToURL();
    });

    it('should login the user and display  the SNAP  HomePage', function() {
        loginObject.credentials();
    });
});

describe('Verify the login functionality with blank username', function() {
    var baseObject = require('../pages/BasePage.js');
    var loginObject = require('../pages/LoginPage.js');

    it('non-angular page so ignore sync and active wait to load', function() {
        baseObject.navigateToURL();
    });

    it('should show the popup is displayed for username field, function() {
        loginObject.enterDetails();
    });
});

describe('Verify the login functionality with invalid username and valid password', function() {
    var baseObject = require('../pages/BasePage.js');
    var loginObject = require('../pages/LoginPage.js');

    it('non-angular page so ignore sync and active wait to load', function() {
        baseObject.navigateToURL();
    });

    it('should display the error message to the user', function() {
        loginObject.enterDetails();
    });
});

describe('Verify the login functionality  valid username with blank password', function() {
    var baseObject = require('../pages/BasePage.js');
    var loginObject = require('../pages/LoginPage.js');

    it('non-angular page so ignore sync and active wait to load', function() {
        baseObject.navigateToURL();
    });

    it('Pop up is displayed for the password field', function() {
        loginObject.enterDetails();
    });
});

describe('Verify the login functionality with valid username and invalid password', function() {
    var baseObject = require('../pages/BasePage.js');
    var loginObject = require('../pages/LoginPage.js');

    it('non-angular page so ignore sync and active wait to load', function() {
        baseObject.navigateToURL();
    });

    it('should display the error message', function() {
        loginObject.enterDetails();
    });
});

describe('Verify the login functionality with invalid username and invalid password', function() {
    var baseObject = require('../pages/BasePage.js');
    var loginObject = require('../pages/LoginPage.js');

    it('non-angular page so ignore sync and active wait to load', function() {
        baseObject.navigateToURL();
    });

    it('should display the error message', function() {
        loginObject.enterDetails();
    });
});

describe('Verify the login functionality with blank username and blank password', function() {
    var baseObject = require('../pages/BasePage.js');
    var loginObject = require('../pages/LoginPage.js');

    it('non-angular page so ignore sync and active wait to load', function() {
        baseObject.navigateToURL();
    });

    it('should display the error message', function() {
        loginObject.enterDetails();
    });
});
describe('Verify the contact the helpdesk link', function() {
    var baseObject = require('../pages/BasePage.js');
    var loginObject = require('../pages/LoginPage.js');

    it('non-angular page so ignore sync and active wait to load', function() {
        baseObject.navigateToURL();
    });

    it('user is redirected to helpdesk page in the new tab', function() {
        loginObject.enterDetails();
    });
});










