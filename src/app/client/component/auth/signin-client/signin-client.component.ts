import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin-client',
  templateUrl: './signin-client.component.html',
  styleUrls: ['./signin-client.component.scss']
})
export class SigninClientComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.router.navigate(['/client']);
  }

}
