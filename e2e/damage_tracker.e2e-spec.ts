import { browser, element, by } from "protractor";

describe("DamageTracker", () => {

    beforeEach(() => {
        browser.get("");
    });

    it("should have a title", () => {
        element(by.css(".bar-button-menutoggle")).click().then(() => {
            browser.driver.sleep(1000); // wait for the animation
            element.all(by.className("input-wrapper")).then((items) => {
                items[0].click();
                browser.driver.sleep(1000); // wait for the animation
                expect(browser.getTitle()).toEqual("damage tracker");
                return items[0];
            });
        });
    });
});
