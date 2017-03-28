import { browser, element, by } from "protractor";
import {openDamageTrackerPage} from "./util";

describe("DamageTracker", () => {

    beforeEach(() => {
        browser.get("");
        openDamageTrackerPage();
    });

    it("should have a title", () => {
        expect(browser.getTitle()).toEqual("damage tracker");
    });
});
