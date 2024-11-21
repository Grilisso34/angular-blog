import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { User } from 'src/app/models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(
        null,
        [Validators.required, Validators.email],
        this.asyncEmails.bind(this)
      ),
      name: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onSubmit() {
    const { email, password, name } = this.form.value;
    const user = new User(email, password, name);

    this.userService.createUser(user).subscribe(() => {
      this.router.navigate(['/login'], {
        queryParams: {
          canLogin: true,
        },
      });
    });
  }

  asyncEmails(control: FormControl): Promise<any> {
    return new Promise((resolve) => {
      this.userService.getUsers(control.value).subscribe((user: User) => {
        if (user) {
          resolve({ asyncEmail: true });
        } else {
          resolve(null);
        }
      });
    });
  }
}
