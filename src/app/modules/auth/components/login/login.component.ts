import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../../../models/user.model';
import { Message } from '../../../../models/message.model';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  message: Message;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.message = new Message('danger', '');

    this.route.queryParams.subscribe((params: Params) => {
      if (params['canLogin']) {
        this.showMessage({
          text: 'Регистрация завершена',
          type: 'success',
        });
      }
    });

    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  private showMessage(message: Message) {
    this.message = message;

    window.setTimeout(() => {
      this.message.text = '';
    }, 500000);
  }

  onSubmit() {
    const formData = this.form.value;

    this.userService.getUsers(formData.email).subscribe((user: User) => {
      if (user) {
        if (user.password === formData.password) {
          window.localStorage.setItem('user', JSON.stringify(user));
          this.authService.login();
          this.router.navigate(['/home', 'articles']);
        } else {
          this.showMessage({
            text: 'Пароль неверный',
            type: 'danger',
          });
        }
      } else {
        this.showMessage({
          text: 'Пользователя не существует',
          type: 'danger',
        });
      }
    });
  }
}
