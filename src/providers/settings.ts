import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Settings {
    private _woundThreshold: number;
    private _strainThreshold: number;

    constructor(public http: Http) {
    }

    get woundThreshold(): number {
        return this._woundThreshold;
    }

    get strainThreshold(): number {
        return this._strainThreshold;
    }
}
