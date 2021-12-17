import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { SharedDirectivesModule } from '../shared/directives/shared.directives.module'

import { PersistanceService } from '../shared/services/persistance.service'
import { MobileSendEmailComponent } from './components/sendEmail/mobile.sendEmail.component'
import { SendEmailComponent } from './components/sendEmail/sendEmail.component'
import { SendEmailService } from './services/sendEmail.service'
import { SendEmailEffect } from './store/effects/sendEmail.effect'
import { reducers } from './store/reducers'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedDirectivesModule,
    StoreModule.forFeature('sendEmail', reducers),
    EffectsModule.forFeature([SendEmailEffect]),
  ],
  declarations: [SendEmailComponent, MobileSendEmailComponent],
  exports: [SendEmailComponent, MobileSendEmailComponent],
  providers: [SendEmailService, PersistanceService],
})
export class SendEmailModule {}
