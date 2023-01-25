import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { SigupComponent } from './sigup/sigup.component';
import { ForgetpasswordComponent } from "./forgetpassword/forgetpassword.component";
const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"sigup" , component:SigupComponent},
  {path:"forgetpassword" , component:ForgetpasswordComponent },
  {path:"welcome",component:WelcomeComponent},
  {path:"question", component:QuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
