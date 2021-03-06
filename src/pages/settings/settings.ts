import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Data} from "../../providers/data";
import {Messages} from "../../providers/messages";

@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html'
})
export class SettingsPage {
    static readonly DT_DB_KEY = "settings-damage-threshold";
    static readonly ST_DB_KEY = "settings-strain-threshold";
    damageThreshold: number;
    strainThreshold: number;

    constructor(public navCtrl: NavController,
                public data: Data,
                public messages: Messages) {
    }

    ionViewDidLoad() {
        this.loadInitialData();
    }

    // returns a promise to be better unit testable
    public loadInitialData(): Promise<any> {
        let promise1 = this.data.load(SettingsPage.DT_DB_KEY).then((prop) => {
            this.damageThreshold = prop.value;
        }).catch((error) => {
            if (error.status != 404) {
                console.log("settings load data: " + error);
                this.messages.showError("settings.error.load-damage-threshold");
            }
        });

        let promise2 = this.data.load(SettingsPage.ST_DB_KEY).then((prop) => {
            this.strainThreshold = prop.value;
        }).catch((error) => {
            if (error.status != 404) {
                console.log("settings load data: " + error);
                this.messages.showError("settings.error.load-strain-threshold");
            }
        });

        return Promise.all([promise1, promise2]);
    }

    public save() {
        this.data.save(SettingsPage.DT_DB_KEY, this.damageThreshold);
        this.data.save(SettingsPage.ST_DB_KEY, this.strainThreshold);
        this.messages.showToast("settings.save");
    }

}
