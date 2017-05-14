import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {AppState} from '../models/app-state';
import {Action} from '@ngrx/store';
import {InitiativeActions} from '../providers/initiative-actions';
import {InitiativeService} from '../providers/initiative-service';

export function reduce(state: AppState, action: Action): AppState {
    switch (action.type) {
        case InitiativeActions.ADD_MASTER_SLOT:
            //TODO: add logic here
            return state;
        case InitiativeActions.ADD_PLAYER_SLOT:
            //TODO: add logic here
            return state;
        default:
            return state;
    }
}
