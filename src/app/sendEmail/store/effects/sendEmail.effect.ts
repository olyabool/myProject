import { Injectable } from '@angular/core'
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'
import { catchError, map, switchMap } from 'rxjs/operators'

import { SendEmailService } from 'src/app/sendEmail/services/sendEmail.service'
import {
  sendEmailAction,
  sendEmailFailureAction,
  sendEmailSuccessAction,
} from '../actions/sendEmail.action'

@Injectable()
export class SendEmailEffect {
  @Effect()
  sendEmail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(sendEmailAction),
      switchMap(({ request }) => {
        return this.sendEmailService.send(request).pipe(
          map(() => {
            return sendEmailSuccessAction()
          }),
          catchError(() => {
            return of(sendEmailFailureAction())
          })
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private sendEmailService: SendEmailService
  ) {}
}
