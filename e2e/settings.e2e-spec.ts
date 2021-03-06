import {browser, element, by, ElementFinder} from "protractor";
import Promise = webdriver.promise.Promise;
import * as webdriver from "selenium-webdriver";
import {openSettingsPage, openDamageTrackerPage} from "./util";

describe("Settings Page", () => {
    let saveBtn: ElementFinder = element(by.buttonText("Save"));
    let dtInput: ElementFinder = element.all(by.className("text-input")).first();
    let stInput: ElementFinder = element.all(by.className("text-input")).get(1);

    beforeEach(() => {
        browser.get("");

    });

    it("should have a title", () => {
        openSettingsPage();
        expect(browser.getTitle()).toEqual("settings");
    });

    it("should save the damage threshold", () => {
        openSettingsPage();
        dtInput.sendKeys("13");
        saveBtn.click();
        expect(element(by.className("ion-toast"))).toBeTruthy();
        openDamageTrackerPage();
        expect(element(by.css("[data-value=dt-threshold]")).getText()).toEqual("13");
    });

    it("should save the strain threshold", () => {
        openSettingsPage();
        stInput.sendKeys("11");
        saveBtn.click();
        expect(element(by.className("ion-toast"))).toBeTruthy();
        openDamageTrackerPage();
        expect(element(by.css("[data-value=st-threshold]")).getText()).toEqual("11");
    });
});
