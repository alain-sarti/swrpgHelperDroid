import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import PouchDB from "pouchdb";

@Injectable()
export class Data {
    private db: any;

    constructor(public http: Http) {
        this.db = new PouchDB("swrpg_helper_droid");
    }

    public save(prop: string, value: any): void {

    }

    public load(prop: string): Promise<any> {
        return Promise.resolve(null);
    }

}
