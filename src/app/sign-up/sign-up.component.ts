import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UsernameValidators } from '../validators/username.validators';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

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
  signUpForm = new FormGroup({
    firstName: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(2),
        UsernameValidators.cannotContainSpace,
      ],
      UsernameValidators.shouldBeUnique
    ),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  get firstName() {
    return this.signUpForm.get('firstName');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  singUp() {
    this.signUpForm.setErrors({
      invalidLogin: true,
    });
  }
}
