import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.scss']
})
export class SigupComponent implements OnInit {
  
   public signupForm !:FormGroup;
   constructor(private formBuilder:FormBuilder ,private http:HttpClient ,private router:Router){}
   ngOnInit(): void{
   
    this.signupForm =this.formBuilder.group({
      name:[''],
      email:[''],
      password:[''],
      mobile:['']
    })
   }
   signup(){
       this.http.post<any>("http://localhost:3000/signupUsers",this.signupForm.value)
       .subscribe(res=>{
        alert("signup  successfull");
        this.signupForm.reset();
        this.router.navigate(['login'])
       },err=>{
        alert("something went wrong")
       })
   }

}