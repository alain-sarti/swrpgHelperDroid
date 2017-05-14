import {Segment} from './segment';

export interface AppState {
    damage: number;
    damageThreshold: number;
    strain: number;
    strainThreshold: number;
    segments: Array<Segment>;
}
