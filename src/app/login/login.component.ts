import { Component} from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { UserserviceService } from "../userservice.service";
import { Router } from '@angular/router';
import { resolveForwardRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 
  loginForm!:FormGroup
  submitted =false;
  user:any;
  loggedIn:any;
  model: any ={}
  getData : any;
  router: any;
  constructor(private formBuilder:FormBuilder, private authService: SocialAuthService, private userservice:UserserviceService,private http:HttpClient){}
  
  
  ngOnInit(){
    this.loginForm =this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
    this.authService.authState.subscribe((user) =>{
      this.user =user;
      this.loggedIn =(user !=null);
      console.log(this.user)
    });
   this.loginForm =this.formBuilder.group({
    email:['',Validators.required,Validators.email]
   })
   }
   onlogin(){
    this.submitted=true;
    if(this.loginForm.invalid){
      return
    }
    alert("success")
   }
   loginuser(){
     var user = this.model.username;
     var password = this.model.password;
     this.userservice.getUserData(user,password).subscribe((res)=> {
      this.getData = res;

      if(this.getData ==true){
          this.router.navigate(["/welcome"]);
      }else
      {
        alert("Invalid data")
      }

     })

   }
   login(){
    this.http.get<any>("http://localhost:3000/signupUsers")
    .subscribe(res=>{
      const user =res.find((a:any)=>{
        return a.email === this.loginForm.value.email  && a.password === this.loginForm.value.password
      });
      if(user){
        alert("login success");
        this.loginForm.reset();
        this.router.navigate(['welcome'])

      }
      else{
        alert("you have to register");
        this.router.navigate(['sigup']);

      }

    },err=>{
      alert("something went wrong")
    })
   }
}
