import { Component, ViewEncapsulation } from '@angular/core'
import { SendEmailComponent } from './sendEmail.component'

@Component({
  selector: 'mc-sendEmail-mobile',
  templateUrl: './mobile.sendEmail.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class MobileSendEmailComponent extends SendEmailComponent {}
