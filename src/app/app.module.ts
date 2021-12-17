import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from 'src/environments/environment'

import { SendEmailModule } from './sendEmail/sendEmail.module'
import { PersistanceService } from './shared/services/persistance.service'
import { AlertComponent } from './shared/alert/alert.component'
import { AlertService } from './shared/services/alert.service'

@NgModule({
  declarations: [AppComponent, AlertComponent],
  imports: [
    BrowserModule,
    SendEmailModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [PersistanceService, AlertService],
  bootstrap: [AppComponent],
})
export class AppModule {}
