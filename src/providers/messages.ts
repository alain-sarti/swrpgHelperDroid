import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {ToastController} from "ionic-angular";
import {TranslateService} from "ng2-translate";

@Injectable()
export class Messages {

    constructor(private toastController: ToastController, private translate: TranslateService) {
    }

    showToast(message: string) {
        let toast = this.toastController.create({
            message: this.translate.instant(message),
            duration: 3000,
            position: 'top'
        });

        toast.present();
    }

}
