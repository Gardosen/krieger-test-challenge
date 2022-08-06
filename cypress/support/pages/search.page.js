const Page = require('./Page');
import {Locator} from '../../support/objects/locator.js';

class SearchPage extends Page {

    get path () { return "/suche"};

    //page locators
    selectors = {
        'category headline': new Locator('xpath', '//*[@id="categoryHeaderContainer"]/div/h1'),
        'result list view': new Locator('xpath', '//*[@id="filterProducts"]/div'),
        'result list view elements': new Locator('xpath', '//*[@id="filterProducts"]/div/div[@class="articleTile"]'),
        'login button': new Locator('xpath', '//*[@id="responsive"]/div[3]/div/div[2]/div[3]/div[1]/div/a'),
        'register button': new Locator('xpath', '//button[@id="registerAccount"]')
    }
}

module.exports = new SearchPage();