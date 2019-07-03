import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { SessionService } from '../core/services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oauth',
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.scss']
})
export class OauthComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private session: SessionService,
    private router: Router,
  ) {
    this.auth = auth;
    this.session = session;
  }
  ngOnInit() {
    this.auth.login({ code: 'd449c1b82a7908a69930505edf3eb22376fb6f94' })
      .subscribe(
        res => {
          this.session.create('oauth', res);

          this.auth.setSessionData()
            .subscribe(user => {
              this.session.create('userinfo', user);
            }, error => {
              this.router.navigateByUrl('/login');
            });
        });
  }
}
