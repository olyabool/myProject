import { Action, createReducer, on } from '@ngrx/store'
import {
  sendEmailAction,
  sendEmailFailureAction,
  sendEmailSuccessAction,
} from './actions/sendEmail.action'
import { SendEmailInterface } from './types/sendEmailState.interface'

const initialState: SendEmailInterface = {
  isLoading: false,
}

const sendEmailReducer = createReducer(
  initialState,
  on(
    sendEmailAction,
    (state): SendEmailInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(
    sendEmailSuccessAction,
    (state): SendEmailInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    sendEmailFailureAction,
    (state): SendEmailInterface => ({
      ...state,
      isLoading: false,
    })
  )
)

export function reducers(state: SendEmailInterface, action: Action) {
  return sendEmailReducer(state, action)
}
