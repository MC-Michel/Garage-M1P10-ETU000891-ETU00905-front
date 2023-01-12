import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-client',
  templateUrl: './login-client.component.html',
  styleUrls: ['./login-client.component.scss']
})
export class LoginClientComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.router.navigate(['/client']);
  }

}
