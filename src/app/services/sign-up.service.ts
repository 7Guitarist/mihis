import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  constructor() {}
  submitSignUpApplication(
    firstName: string,
    lastName: string,
    emailOrPhone: string,
    password: string
  ) {
    console.log(firstName, lastName, emailOrPhone, password);
  }
}
