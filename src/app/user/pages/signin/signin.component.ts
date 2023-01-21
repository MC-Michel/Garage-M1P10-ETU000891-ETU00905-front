import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { MessageService } from 'src/app/commons/services/message.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  isLoading: boolean = false;
  form: FormGroup;
  constructor(private router: Router, private fb: FormBuilder,private message: MessageService, private userService: UserService) {
    this.form = fb.group({
      'firstName': [null, [Validators.required]],
      'lastName': [null, [Validators.required]],
      'email': [null, [Validators.required]],
      'customerData.licenceType': [null, [Validators.required]],
      'password': [null, [Validators.required]],
      'confirmPassword': [null, [Validators.required]],
    });
   }
   
   async submit(){
    this.isLoading = true;
    try{
      const data = this.form.value;
      data['customerData'] = {'licenceType': data['customerData.licenceType']};
      await lastValueFrom(this.userService.signin(data));
      await this.router.navigateByUrl('/users/login');
      this.message.showSuccess('Client enregistre, veuillez vous connecter');
    }catch(e: any){
      console.log(e);
      this.message.showError(e)
    }
    this.isLoading = false;
   }
}
