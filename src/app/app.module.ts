import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { DamageTracker } from '../pages/damage_tracker/damage_tracker';
import { InitiativeTracker } from '../pages/initiative_tracker/initiative_tracker';

@NgModule({
  declarations: [
    MyApp,
    DamageTracker,
    InitiativeTracker
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DamageTracker,
    InitiativeTracker
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
