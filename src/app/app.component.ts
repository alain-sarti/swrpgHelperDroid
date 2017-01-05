import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';
import {DamageTracker} from '../pages/damage_tracker/damage_tracker';
import {InitiativeTracker} from '../pages/initiative_tracker/initiative_tracker';
import {TranslateService, TranslatePipe} from 'ng2-translate';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = DamageTracker;

    pages: Array<{title: string, component: any}>;

    constructor(public platform: Platform, public translate: TranslateService) {
        this.initializeApp();
        this.translateConfig();

        // used for an example of ngFor and navigation
        this.pages = [
            {title: 'Damage Tracker', component: DamageTracker},
            {title: 'Initiative Tracker', component: InitiativeTracker}
        ];
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }

    translateConfig() {
        var userLang = navigator.language.split('-')[0]; // use navigator lang if available
        userLang = /(de|en)/gi.test(userLang) ? userLang : 'en';

        // this language will be used as a fallback when a translation isn't found in the current language
        this.translate.setDefaultLang('en');

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        this.translate.use(userLang);
    }
}
