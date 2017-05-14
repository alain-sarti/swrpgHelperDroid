import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Segment} from '../models/segment';
import {Action} from '@ngrx/store';

@Injectable()
export class InitiativeActions {

    constructor(public http: Http) {
    }

    static ADD_MASTER_SLOT = 'ADD_MASTER_SLOT';
    addMasterSlot(segment: Segment): Action {
        return {
            type: InitiativeActions.ADD_MASTER_SLOT,
            payload: segment
        }
    }

    static ADD_PLAYER_SLOT = 'ADD_PLAYER_SLOT';
    addPlayerSlot(segment: Segment): Action {
        return {
            type: InitiativeActions.ADD_PLAYER_SLOT,
            payload: segment
        }
    }
}
