import { AbstractControl, ValidationErrors } from '@angular/forms';

export class EmailPhoneValidators {
  static isValidEmail(control: AbstractControl): ValidationErrors | null {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (control.value && !emailRegex.test(control.value)) {
      return { invalidEmail: true };
    }
    return null;
  }

  static isValidPhone(control: AbstractControl): ValidationErrors | null {
    const phoneRegex = /^09\d{9}$/;
    if (control.value && !phoneRegex.test(control.value)) {
      return { invalidPhone: true };
    }
    return null;
  }

  static isEmailOrPhone(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) return { required: true };

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^09\d{9}$/;

    if (!emailRegex.test(value) && !phoneRegex.test(value)) {
      return { invalidEmailPhone: true };
    }

    return null;
  }
}
