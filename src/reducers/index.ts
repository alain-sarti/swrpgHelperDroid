import * as fromInitiative from './initiative-reducer';
import * as fromDamage from './damage-tracker-reducer';
import {Action, ActionReducer, combineReducers} from '@ngrx/store';
import {AppState} from '../models/app-state';
import {compose} from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';

const reducers = {
    initiative: fromInitiative.reduce,
    damage: fromDamage.reduce
};

const developmentReducer: ActionReducer<AppState> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<AppState> = combineReducers(reducers);

export function reducer(state: AppState, action: Action) {
    //TODO: resolve environment
    // if (environment.production) {
    //     return productionReducer(state, action);
    // } else {
    //     return developmentReducer(state, action);
    // }
    return developmentReducer(state, action);
}
