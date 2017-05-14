import 'rxjs/add/operator/map';
import {AppState} from '../models/app-state';
import {Action} from '@ngrx/store';
import {DamageTrackerActions} from '../providers/damage-tracker-actions';

export function reduce(state: AppState, action: Action): AppState {
    switch (action.type) {
        case DamageTrackerActions.TAKE_DAMAGE:
            //TODO: add logic here
            return state;
        case DamageTrackerActions.TAKE_STRAIN:
            //TODO: add logic here
            return state;
        default:
            return state;
    }
}
