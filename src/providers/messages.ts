import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {ToastController, AlertController} from "ionic-angular";
import {TranslateService} from "ng2-translate";

@Injectable()
export class Messages {

    constructor(private toastController: ToastController,
                private translate: TranslateService,
                private alertController: AlertController) {
    }

    showToast(message: string): void {
        let toast = this.toastController.create({
            message: this.translate.instant(message),
            duration: 3000,
            position: 'top'
        });

        toast.present();
    }

    showError(message: string): void {
        let prompt = this.alertController.create({
            title: this.translate.instant("error.title"),
            message: this.translate.instant(message),
            buttons: [
                {
                    text: this.translate.instant("error.dismiss")
                }
            ]
        });
        prompt.present();
    }

}
