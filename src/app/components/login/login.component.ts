import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service: ApiService, private router: Router) { }

  ngOnInit(): void {
    if(window.sessionStorage.getItem('userToken')!=null){    
      this.router.navigate(['/home']);    
    } 
  }

  LoginForm=new FormGroup({    
    UserName: new FormControl('',Validators.required),    
    Password: new FormControl('',Validators.required),    
   }); 


   GetToken(){
      const user=this.LoginForm.controls['UserName'].value;    
      const password=this.LoginForm.controls['Password'].value;   

      this.service.UserAuthentication(user,password).subscribe((data:any)=>{    
        window.sessionStorage.setItem('userToken',data.access_token);    
        this.router.navigate(['/home']);    
      });   
   }
 
}
