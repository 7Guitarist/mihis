import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UsernameValidators } from '../validators/username.validators';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PasswordValidators } from '../validators/password.validators';
import { EmailPhoneValidators } from '../validators/email_phone.validators';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SignUpService } from '../services/sign-up.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FooterComponent,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  signUpForm: FormGroup;
  buttonLabel: string = 'Continue';
  signUpService = inject(SignUpService);

  constructor(fb: FormBuilder) {
    this.signUpForm = fb.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(2)]],
        lastName: ['', [Validators.required, Validators.minLength(2)]],
        emailOrPhone: [
          '',
          [Validators.required, EmailPhoneValidators.isEmailOrPhone],
        ],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: PasswordValidators.passwordShouldMatch,
      }
    );
  }

  get firstName() {
    return this.signUpForm.get('firstName');
  }

  get lastName() {
    return this.signUpForm.get('lastName');
  }

  get emailOrPhone() {
    return this.signUpForm.get('emailOrPhone');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  confirmPasswordValid: boolean = false;
  passwordMismatchError: boolean = false;

  // ngOnInit is the lifecycle hook where we set up the form value changes subscription
  ngOnInit(): void {
    // Subscribe to form value changes
    this.signUpForm.valueChanges
      .pipe(
        // Delay the validation check by 700 milliseconds
        debounceTime(700),
        // Only proceed if the value has actually changed
        distinctUntilChanged()
      )
      .subscribe(() => {
        const emailOrPhoneValue = this.emailOrPhone?.value;

        if (emailOrPhoneValue) {
          if (EmailPhoneValidators.isValidEmail(this.emailOrPhone) === null) {
            this.buttonLabel = 'Verify Email';
          } else if (
            EmailPhoneValidators.isValidPhone(this.emailOrPhone) === null
          ) {
            this.buttonLabel = 'Verify Phone';
          } else {
            this.buttonLabel = 'Continue';
          }
        } else {
          this.buttonLabel = 'Continue';
        }
        // Update the boolean flags based on the form's current validity state
        this.confirmPasswordValid = this.confirmPassword?.valid || false;
        this.passwordMismatchError =
          this.signUpForm.errors?.['passwordShouldMatch'] || false;
      });
  }

  submitSignUpApplication() {
    this.signUpService.submitSignUpApplication(
      this.signUpForm.value.firstName ?? '',
      this.signUpForm.value.lastName ?? '',
      this.signUpForm.value.emailOrPhone ?? '',
      this.signUpForm.value.password ?? ''
    );
  }
}
