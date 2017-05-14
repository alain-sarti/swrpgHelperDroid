import {Component} from "@angular/core";

import {NavController, AlertController} from "ionic-angular";
import {TranslateService} from "ng2-translate";
import {Data} from "../../providers/data";
import {Segment} from '../../models/segment';

@Component({
    selector: "page-initiative-tracker",
    templateUrl: "initiative_tracker.html"
})
export class InitiativeTracker {
    readonly MASTER = "master";
    readonly PLAYERS = "players";
    readonly DB_KEY = "initiative-segments";

    private segments: Array<Segment> = [];

    constructor(public navController: NavController,
                private alertController: AlertController,
                private translate: TranslateService,
                private data: Data) {
        this.data.load(this.DB_KEY).then((data) => {
            this.segments = data.value;
        }).catch((error) => {
            if (error.status != 404) {
                console.log("it load data: " + error);
            }
        })
    }

    public showDialog(type: string) {
        let prompt = this.alertController.create({
            title: this.translate.instant("it.add.title"),
            message: this.translate.instant("it.add.message"),
            inputs: [
                {
                    type: "number",
                    name: "slot",
                    placeholder: this.translate.instant("it.add.placeholder")
                }
            ],
            buttons: [
                {
                    text: this.translate.instant("btn.cancel")
                },
                {
                    text: this.translate.instant("btn.save"),
                    handler: data => {
                        this.addSlot(type, data.slot);
                    }
                }
            ]
        });
        prompt.present();
    }

    public reset() {
        this.segments = [];
        this.saveSegments();
    }

    public icon(type: string): string {
        if (type == this.MASTER) {
            return "nuclear";
        }
        else {
            return "contacts";
        }
    }

    private addSlot(type: string, slot: number): void {
        this.segments.push({
            type: type,
            slot: slot
        });

        this.segments.sort((n1, n2) => {
            if (n1.slot - n2.slot != 0) {
                return n2.slot - n1.slot;
            }
            else {
                return n1.type == this.MASTER ? 1 : -1;
            }
        });
        this.saveSegments();
    }

    private saveSegments() {
        this.data.save(this.DB_KEY, this.segments);
    }
}
