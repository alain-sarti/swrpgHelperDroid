import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Data} from "./data";
import {SettingsPage} from "../pages/settings/settings";

@Injectable()
export class Settings {

    constructor(public http: Http, private data: Data) {
    }

    get damageThreshold(): Promise<number> {
        return this.data.load(SettingsPage.DT_DB_KEY).then((prop) => {
            return prop.value;
        });
    }

    get strainThreshold(): Promise<number> {
        return this.data.load(SettingsPage.ST_DB_KEY).then((prop) => {
            return prop.value;
        });
    }
}
