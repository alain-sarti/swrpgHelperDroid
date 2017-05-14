import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Action} from '@ngrx/store';

@Injectable()
export class DamageTrackerActions {

    constructor(public http: Http) {
    }

    static TAKE_DAMAGE = 'TAKE_DAMAGE';
    takeDamage(damage: number): Action {
        return {
            type: DamageTrackerActions.TAKE_DAMAGE,
            payload: damage
        }
    }

    static TAKE_STRAIN = 'TAKE_STRAIN';
    takeStrain(strain: number): Action {
        return {
            type: DamageTrackerActions.TAKE_STRAIN,
            payload: strain
        }
    }
}
