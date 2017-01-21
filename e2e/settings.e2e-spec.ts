import { browser, element, by } from "protractor";

describe("Settings Page", () => {

    beforeEach(() => {
        browser.get("");
    });

    it("should have a title", () => {
        element(by.css(".bar-button-menutoggle")).click().then(() => {
            browser.driver.sleep(2000); // wait for the animation
            element.all(by.className("input-wrapper")).then((items) => {
                items[2].click();
                browser.driver.sleep(2000); // wait for the animation
                expect(browser.getTitle()).toEqual("settings");
                return items[2];
            });
        });
    });
});
