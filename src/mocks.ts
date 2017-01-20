// APP:

import {ToastOptions, Toast, AlertOptions, Alert} from "ionic-angular";
export class DataMock {
    public load(prop: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve({prop: prop, value: 12});
        });
    }

    public save(prop: string, value: any): void {}
}

export class MessagesMock {
    public showToast(): void {}
}

// IONIC:

export class ConfigMock {

    public get(): any {
        return '';
    }

    public getBoolean(): boolean {
        return true;
    }

    public getNumber(): number {
        return 1;
    }
}

export class FormMock {
    public register(): any {
        return true;
    }
}

export class NavMock {

    public pop(): any {
        return new Promise(function (resolve: Function): void {
            resolve();
        });
    }

    public push(): any {
        return new Promise(function (resolve: Function): void {
            resolve();
        });
    }

    public getActive(): any {
        return {
            'instance': {
                'model': 'something',
            },
        };
    }

    public setRoot(): any {
        return true;
    }
}

export class PlatformMock {
    public ready(): any {
        return new Promise((resolve: Function) => {
            resolve();
        });
    }
}

export class MenuMock {
    public close(): any {
        return new Promise((resolve: Function) => {
            resolve();
        });
    }
}

export class ToastControllerMock {
    public create(opts: ToastOptions): Toast {
        return new Toast(null, opts);
    }
}

export class AlertControllerMock {
    public create(opts: AlertOptions): Alert {
        return new Alert(null, opts);
    }
}

export class TranslateServiceMock {

}
