import {browser, element, by, ElementFinder} from "protractor";
import Promise = webdriver.promise.Promise;
import * as webdriver from "selenium-webdriver";

export function openDamageTrackerPage(): Promise<any> {
    return element(by.css(".bar-button-menutoggle")).click().then(() => {
        browser.driver.sleep(500); // wait for the animation
        return element.all(by.className("input-wrapper")).then((items) => {
            items[0].click();
            browser.driver.sleep(500); // wait for the animation
        });
    });
}

export function openInitiativeTrackerPage(): Promise<any> {
    return element(by.css(".bar-button-menutoggle")).click().then(() => {
        browser.driver.sleep(500); // wait for the animation
        return element.all(by.className("input-wrapper")).then((items) => {
            items[1].click();
            browser.driver.sleep(500); // wait for the animation
        });
    });
}

export function openSettingsPage(): Promise<any> {
    return element(by.css(".bar-button-menutoggle")).click().then(() => {
        browser.driver.sleep(500); // wait for the animation
        return element.all(by.className("input-wrapper")).then((items) => {
            items[2].click();
            browser.driver.sleep(500); // wait for the animation
        });
    });
}
