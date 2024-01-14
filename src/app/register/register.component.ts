import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm!: FormGroup;

  constructor() {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      userName: new FormControl('', [
        Validators.required,
        this.noSpacesValidator,
      ]),
      password: new FormControl('', [
        Validators.required,
        this.strongPasswordValidator,
      ]),
      rePassword: new FormControl('', [
        Validators.required,
        this.matchingPasswordsValidator,
      ]),
    });
  }

  noSpacesValidator(control: FormControl): { [key: string]: boolean } | null {
    const hasSpaces = control.value.trim().indexOf(' ') !== -1;
    return hasSpaces ? { noSpaces: true } : null;
  }

  strongPasswordValidator(
    control: FormControl
  ): { [key: string]: boolean } | null {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(control.value) ? null : { strongPassword: true };
  }

  matchingPasswordsValidator(
    control: FormControl
  ): { [key: string]: boolean } | null {
    const password = control.parent?.get('password')?.value;
    const confirmPassword = control.value;
    if (password !== confirmPassword) {
      return { passwordsDontMatch: true };
    }

    return null; // No errors
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Form submitted:', this.registerForm.value);
    }
  }
}
