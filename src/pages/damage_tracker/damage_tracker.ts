import {Component} from '@angular/core';

import {NavController, AlertController} from 'ionic-angular';
import {Settings} from "../../providers/settings";
import {Data} from "../../providers/data";
import {Messages} from "../../providers/messages";

@Component({
    selector: 'page-damage-tracker',
    templateUrl: 'damage_tracker.html'
})
export class DamageTracker {
    private readonly DAMAGE: number = 0;
    private readonly STRAIN: number = 1;
    static readonly D_DB_KEY:string = "dt-damage";
    static readonly S_DB_KEY: string = "dt-strain";
    damage: number = 0;
    strain: number = 0;
    damageThreshold: number;
    strainThreshold: number;

    constructor(public navCtrl: NavController,
                private alertController: AlertController,
                private settings: Settings,
                private data: Data,
                private messages: Messages) {

    }

    ionViewDidLoad() {
        this.data.load(DamageTracker.D_DB_KEY).then((prop) => {
            this.damage = prop.value;
        }).catch((error) => {
            if (error.status != 404) {
                this.messages.showError("dt.error.load-data");
            }
        });

        this.data.load(DamageTracker.S_DB_KEY).then((prop) => {
            this.strain = prop.value;
        }).catch((error) => {
            if (error.status != 404) {
                this.messages.showError("dt.error.load-data");
            }
        });

        this.settings.damageThreshold.then((value) => {
            this.damageThreshold = value;
        });
        this.settings.strainThreshold.then((value) => {
            this.strainThreshold = value;
        })
    }

    public showDialog(type: number) {
        let text:string;
        if (type == this.DAMAGE) {
            text = "damage";
        } else if (type == this.STRAIN) {
            text = "strain";
        }
        let prompt = this.alertController.create({
            title: "",
            // message: "Enter a name for this new album you're so keen on adding",
            inputs: [
                {
                    name: text,
                    placeholder: text,
                    type: "number"
                },
            ],
            buttons: [
                {
                    text: "Cancel"
                },
                {
                    text: "Save",
                    handler: (data) => {
                        if (type == this.DAMAGE) {
                            this.takeDamage(data);
                        } else if (type == this.STRAIN) {
                            this.takeStrain(data);
                        }
                    }
                }
            ]
        });
        prompt.present();
    }

    private takeDamage(data: any): void {
        this.damage = data.damage;
        this.data.save(DamageTracker.D_DB_KEY, data.damage);
    }

    private takeStrain(data: any): void {
        this.strain = data.strain;
        this.data.save(DamageTracker.S_DB_KEY, data.strain);
    }
}
