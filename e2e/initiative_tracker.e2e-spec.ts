import { browser, element, by } from "protractor";
import {openInitiativeTrackerPage} from "./util";

describe("InitiativeTracker", () => {
    let addMasterBtn = element(by.buttonText("Add master slot"));
    let addPlayerBtn = element(by.buttonText("Add players slot"));

    beforeEach(() => {
        browser.get("");
        openInitiativeTrackerPage();
    });

    it("should have a title", () => {
        expect(browser.getTitle()).toEqual("initiative tracker");
    });

    it("should add a GM entry", () => {
        addMasterBtn.click();
        let input = element(by.css('[placeholder="initiative slot"]'));
        input.sendKeys("15");
        browser.driver.sleep(400);
        let save = element(by.buttonText("Save"));
        save.click();
        let entry = element(by.css(".ion-md-nuclear"));
        expect(entry.isPresent()).toBeTruthy();
    });

    it("should add a Player entry", () => {
        addPlayerBtn.click();
        let input = element(by.css('[placeholder="initiative slot"]'));
        input.sendKeys("15");
        browser.driver.sleep(400);
        let save = element(by.buttonText("Save"));
        save.click();
        let entry = element(by.css(".ion-md-contacts"));
        expect(entry.isPresent()).toBeTruthy();
    });
});
