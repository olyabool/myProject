import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs'

import { PersistanceService } from 'src/app/shared/services/persistance.service'
import { EmailInterface } from '../store/types/email.interface'

const STORAGE_KEY = 'message from '

@Injectable()
export class SendEmailService {
  private storageSub = new Subject()

  constructor(private persistanceService: PersistanceService) {}

  send(data: EmailInterface): Observable<any> {
    this.persistanceService.set(`${STORAGE_KEY}${data.email}`, data)
    this.storageSub.next(data)

    return this.storageSub.asObservable()
  }
}
