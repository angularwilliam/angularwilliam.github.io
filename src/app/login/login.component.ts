import { HardCodedAuthenticationService } from './../service/hard-coded-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "Angular";
  password = "";
  invalidMessage = "Invalid credentials"
  displayInvalidMessage = false;

  constructor(
    private hardCodedAuthenticationService: HardCodedAuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  handleLogin() {
    if (this.hardCodedAuthenticationService.authenticate(this.username, this.password)) {
      this.displayInvalidMessage = false;
      this.router.navigate(["welcome", this.username]);
    } else {
      this.displayInvalidMessage = true;
    }
  }

}
