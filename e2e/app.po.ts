import { browser, by, element, $$ } from 'protractor';

import * as $ from 'jquery';


export class AppPage {
  navigateTo(path) {
    return browser.get(path);
  }

  waitForAngular() {
    return browser.waitForAngular();
  }

  wait(selector) {
    browser.wait(element(by.css(selector)).isDisplayed);
  }

  getPageTitle() {
    return browser.getTitle();
  }

  getElementText(selector) {
    return element(by.css(selector)).getText();
  }

  isElementPresent(selector) {
    return element(by.css(selector)).isPresent();
  }

  clickElement(selector) {
    return element(by.css(selector)).click();
  }

  elementCount(selector) {
    return element.all(by.css(selector)).count();
  }
}
