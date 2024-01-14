import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {
  registerForm!: FormGroup;

  constructor() {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.email]),
      email: new FormControl('', Validators.required),
      username: new FormControl('', [
        Validators.required,
        this.noSpacesValidator,
      ]),
      password: new FormControl('', [
        Validators.required,
        this.strongPasswordValidator,
      ]),
      rePassword: new FormControl('', [
        Validators.required,
        this.passwordMatch,
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

  passwordMatch(control: FormControl): { [key: string]: boolean } | null {
    const password = this.registerForm.get('password')?.value;
    const rePassword = control.value.trim();
    for (let i = 0; i < rePassword.length; i++) {
      if (rePassword[i] !== password[i]) return null;
    }
    return { match: true };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      // Handle form submission logic here
      console.log('Form submitted:', this.registerForm.value);
    }
  }
}
