const Page = require('./Page');
import {Locator} from '../../support/objects/locator.js';

class MainPage extends Page {

    get path () { return "/"};

    //page locators
    selectors = {
        'search input field': new Locator('xpath', '//*[@id="searchFieldInputId"]'),
        'cookie policy': new Locator('xpath', '//*[@id="responsive"]/div[15]/div'),
        'accept all cookies button': new Locator('xpath', '//*[@id="responsive"]/div[15]/div/div/div[2]/div[2]'),
        'save settings button': new Locator('xpath', '//*[@id="responsive"]/div[15]/div/div/div[2]/div[1]/button')
    }
}

module.exports = new MainPage();