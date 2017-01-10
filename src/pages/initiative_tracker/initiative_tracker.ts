import {Component} from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';

@Component({
    selector: 'page-initiative-tracker',
    templateUrl: 'initiative_tracker.html'
})
export class InitiativeTracker {
    private segments: Array<{type: string, slot: number}>;

    constructor(public navController: NavController) {
        let numbers = [1, 2, 3];
        this.segments = numbers.map((num) => {
            let type = "players";
            if (num % 2 == 0) {
                type = "master";
            }
            return {type: type, slot: num};
        });
    }
}
