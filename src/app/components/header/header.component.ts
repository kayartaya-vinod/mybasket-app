import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'mb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  qryTxt: string = '';

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  search() {
    this.router.navigate(['/list'], { queryParams: { q: this.qryTxt } })
  }

}
