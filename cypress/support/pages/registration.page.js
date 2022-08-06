const Page = require('./Page');
import {Locator} from '../../support/objects/locator.js';

class RegistrationPage extends Page {

    get path () { return "/registrierung"};

    //page locators
    selectors = {
        'salutation selection' : new Locator('locator', 'select#salutation')
    }
}

module.exports = new RegistrationPage();