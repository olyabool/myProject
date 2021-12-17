import { AbstractControl, ValidationErrors } from '@angular/forms'
var EMAIL_REGEXP =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

export class CustomValidators {
  public static required(control: AbstractControl): ValidationErrors | null {
    return control.value == null || control.value.length === 0
      ? { required: true, errorText: 'Field required for input' }
      : null
  }

  public static email(control: AbstractControl): ValidationErrors | null {
    if (control.value == null || control.value.length === 0) {
      return null
    }
    return EMAIL_REGEXP.test(control.value)
      ? null
      : { email: true, errorText: 'Enter a valid email' }
  }

  public static minLength(minLen: number): ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors => {
      if (control.value == null || control.value.length === 0) {
        return null
      }

      return control.value.length < minLen
        ? {
            minLength: true,
            errorText: `Value must be at least ${minLen} characters. Now are ${control.value.length} characters`,
          }
        : null
    }
  }

  public static trim(control: AbstractControl): ValidationErrors | null {
    if (control.value == null || control.value.length === 0) {
      return null
    }

    let trimValue: string
    trimValue = (control.value as string).toString().trim()
    return trimValue === ''
      ? { trim: true, errorText: 'An expression cannot contain only spaces' }
      : null
  }
}
