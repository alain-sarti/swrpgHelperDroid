import {ComponentFixture, async} from "@angular/core/testing";
import {TestUtils} from "../../test";
import {SettingsPage} from "./settings";

let fixture: ComponentFixture<SettingsPage> = null;
let instance: any = null;

describe("SettingsPage", () => {
    beforeEach(async(() => TestUtils.beforeEachCompiler([SettingsPage]).then((compiled) => {
        fixture = compiled.fixture;
        instance = compiled.instance;
        fixture.detectChanges();
    })));

    afterEach(() => {
        fixture.destroy();
    });

    it("initialises", () => {
        expect(instance).toBeTruthy();
    });

    it("loads data", (done) => {
        let value = 12;
        spyOn(instance.data, "load").and.returnValue(new Promise((resolve, reject) => resolve({prop: "", value: value})));
        instance.loadInitialData().then(() => {
            expect(instance.damageThreshold).toEqual(value);
            expect(instance.strainThreshold).toEqual(value);
            done();
        }).catch((error) => done.fail(error));
    });

    it("handles no data found", (done) => {
        spyOn(instance.data, "load").and.returnValue(new Promise((resolve, reject) => reject({status: 404})));
        instance.loadInitialData().then(() => {
            expect(instance.damageThreshold).toBeUndefined();
            expect(instance.strainThreshold).toBeUndefined();
            done();
        }).catch((error) => done.fail(error));
    });

    it("saves data", (done) => {
        let value = 12;
        spyOn(instance.data, "load").and.returnValue(new Promise((resolve, reject) => resolve({prop: "", value: value})));
        instance.loadInitialData().then(() => {
            let saveSpy = spyOn(instance.data, "save");
            instance.save();
            expect(saveSpy).toHaveBeenCalledWith(SettingsPage.DT_DB_KEY, value);
            expect(saveSpy).toHaveBeenCalledWith(SettingsPage.ST_DB_KEY, value);
            done();
        });
    });
});
