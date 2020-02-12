import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cust: any = {};
  showPassword: boolean = false;

  constructor(private auth: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    if (this.auth.isAuthenticated) {
      this.router.navigate(['/']);
    }
  }

  get passwordTfType(): string {
    return this.showPassword ? 'text' : 'password';
  }

  login() {
    const { email, password } = this.cust;
    this.auth.login(email, password).subscribe(
      () => this.router.navigate(['/']),
      () => alert('Invalid email/password')
    );
  }

}
