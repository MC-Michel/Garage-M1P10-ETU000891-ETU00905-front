import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header-financier',
  templateUrl: './header-financier.component.html',
  styleUrls: ['./header-financier.component.scss']
})
export class HeaderFinancierComponent implements OnInit {
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
