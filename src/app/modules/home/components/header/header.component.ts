import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  user: User;

  constructor(private authServise: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.user = JSON.parse(window.localStorage.getItem('user'));
  }

  onLogout() {
    this.authServise.logout();
    this.router.navigate(['login']);
  }
}
