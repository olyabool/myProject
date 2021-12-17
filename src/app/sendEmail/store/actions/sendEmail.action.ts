import { createAction, props } from '@ngrx/store'
import { ActionTypes } from '../action.type'
import { EmailInterface } from '../types/email.interface'

export const sendEmailAction = createAction(
  ActionTypes.SEND_EMAIL,
  props<{ request: EmailInterface }>()
)

export const sendEmailSuccessAction = createAction(
  ActionTypes.SEND_EMAIL_SUCCESS
)

export const sendEmailFailureAction = createAction(
  ActionTypes.SEND_EMAIL_FAILURE
)
