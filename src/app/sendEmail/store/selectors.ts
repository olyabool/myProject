import { createFeatureSelector, createSelector } from '@ngrx/store'

import { AppStateInterface } from 'src/app/shared/types/appState.interface'
import { SendEmailInterface } from './types/sendEmailState.interface'

export const sendEmailFeatureSelector = createFeatureSelector<
  AppStateInterface,
  SendEmailInterface
>('sendEmail')

export const isLoadingSelector = createSelector(
  sendEmailFeatureSelector,
  (sendEmailState: SendEmailInterface) => sendEmailState.isLoading
)
