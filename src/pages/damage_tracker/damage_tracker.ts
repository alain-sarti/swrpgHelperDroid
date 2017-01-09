import {Component} from '@angular/core';

import {NavController, AlertController} from 'ionic-angular';
import {Settings} from "../../providers/settings";

@Component({
    selector: 'page-damage-tracker',
    templateUrl: 'damage_tracker.html'
})
export class DamageTracker {
    private readonly DAMAGE: number = 0;
    private readonly STRAIN: number = 1;

    constructor(public navCtrl: NavController, private alertController: AlertController, private settings: Settings) {

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
        console.log(data.damage);
    }

    private takeStrain(data: any): void {
        console.log(data.strain);
    }
}
