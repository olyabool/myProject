import { Component, OnDestroy, OnInit } from '@angular/core'
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import { Observable, Subscription } from 'rxjs'

import { CustomValidators } from 'src/app/shared/customValidators/customValidators'
import { AlertService } from 'src/app/shared/services/alert.service'
import { sendEmailAction } from '../../store/actions/sendEmail.action'
import { isLoadingSelector } from '../../store/selectors'
import { EmailInterface } from '../../store/types/email.interface'

@Component({
  selector: 'mc-sendEmail',
  templateUrl: './sendEmail.component.html',
})
export class SendEmailComponent implements OnInit, OnDestroy {
  form: FormGroup
  isLoading$: Observable<boolean>
  isLoadingSubscription: Subscription = new Subscription()

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
    this.initializeListeners()
  }

  initializeForm() {
    this.form = this.fb.group({
      username: ['', [CustomValidators.required, CustomValidators.trim]],
      email: ['', [CustomValidators.required, CustomValidators.email]],
      subject: ['', [CustomValidators.required, CustomValidators.trim]],
      message: [
        '',
        [
          CustomValidators.required,
          CustomValidators.minLength(3),
          CustomValidators.trim,
        ],
      ],
    })
  }

  initializeValues() {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
  }

  initializeListeners() {
    this.isLoadingSubscription = this.isLoading$.subscribe(
      (isLoading: boolean) => {
        if (isLoading === true) {
          this.form.reset()
          this.alertService.success('Message sent')
        }
      }
    )
  }

  submit() {
    if (this.form.invalid) {
      Object.keys(this.form.controls).forEach((key) => {
        this.form.get(key).markAsTouched()
      })
      return
    }

    const request: EmailInterface = {
      ...this.form.value,
    }

    this.store.dispatch(sendEmailAction({ request }))
  }

  public get f(): { [key: string]: AbstractControl } {
    return this.form.controls
  }

  decodeError(mnemo: string) {
    let fc = mnemo == null ? this.form : this.form.get(mnemo)
    if (fc && fc.errors) {
      return fc.errors.errorText
    } else {
      return ''
    }
  }

  ngOnDestroy(): void {
    this.isLoadingSubscription.unsubscribe()
  }
}
