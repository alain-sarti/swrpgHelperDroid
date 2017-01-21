import { browser, element, by } from "protractor";

describe("InitiativeTracker", () => {

    beforeEach(() => {
        browser.get("");
    });

    it("should have a title", () => {
        element(by.css(".bar-button-menutoggle")).click().then(() => {
            browser.driver.sleep(2000); // wait for the animation
            element.all(by.className("input-wrapper")).then((items) => {
                items[1].click();
                browser.driver.sleep(2000); // wait for the animation
                expect(browser.getTitle()).toEqual("initiative tracker");
                return items[1];
            });
        });
    });
});
