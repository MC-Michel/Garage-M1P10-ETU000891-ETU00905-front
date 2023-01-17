import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { MessageService } from 'src/app/commons/services/message.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent   {
  isLoading: boolean = false;

  form: FormGroup
  constructor(private fb: FormBuilder, private userService: UserService, private message: MessageService, private router: Router) {
    this.form = fb.group({
      'email': [null, [Validators.required]],
      'password': [null, [Validators.required]],
    })
   }

   async submit(){
    this.isLoading = true;
    try{
      const data = await lastValueFrom(this.userService.login(this.form.value));
      const nextPath = this.userService.getNextLink(data.user.roleId);
      this.router.navigate([nextPath]);
    }catch(e: any){
      console.log(e);
      this.message.showError(e.message);
    }
    this.isLoading = false;
   }
 

}
