import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header-client',
  templateUrl: './header-client.component.html',
  styleUrls: ['./header-client.component.scss']
})
export class HeaderClientComponent implements OnInit {
  userData : any;
  env : any = environment;

  constructor(
    private userService : UserService,
    private route : ActivatedRoute,
    private router : Router
    ) { }

  ngOnInit(): void {
    let userData = localStorage.getItem("userData");
    if(userData){
      this.userData = JSON.parse(userData);
    }
  }

  logout(){
    this.router.navigate(['/users/login']);
  }

}
