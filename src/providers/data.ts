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
        this.db.get(prop).then((doc) => {
            this.putPref(prop, value, doc._rev);
        }).catch((error) => {
            if (error.status == 404) {
                this.putPref(prop, value, null);
            }
        });
    }

    public load(prop: string): Promise<any> {
        return this.db.get(prop);
    }

    public delete(prop: string): void {
        //TODO: add handling of 404 status
        this.db.remove(prop);
    }

    private putPref(key: string, value: any, _rev: any): void {
        this.db.put({
            _id: key,
            _rev: _rev,
            value: value
        })
    }

}
