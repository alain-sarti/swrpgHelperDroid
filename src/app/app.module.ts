import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {DamageTracker} from '../pages/damage_tracker/damage_tracker';
import {InitiativeTracker} from '../pages/initiative_tracker/initiative_tracker';
import { TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate/ng2-translate';
import { Http } from '@angular/http'
import {SettingsPage} from "../pages/settings/settings";

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}

@NgModule({
    declarations: [
        MyApp,
        DamageTracker,
        InitiativeTracker,
        SettingsPage
    ],
    imports: [
        IonicModule.forRoot(MyApp),
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        DamageTracker,
        InitiativeTracker,
        SettingsPage
    ],
    providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {
}
