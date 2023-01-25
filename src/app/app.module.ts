import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SocialLoginModule,SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { 
  GoogleLoginProvider,

 } from "@abacritt/angularx-social-login";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionComponent } from './question/question.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SigupComponent } from './sigup/sigup.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component'



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    QuestionComponent,
    HeaderComponent,
    LoginComponent,
    SigupComponent,
    ForgetpasswordComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SocialLoginModule,
    FormsModule
    
  ],
  providers: [
      {
        provide: 'SocialAuthServiceConfig',
        useValue: {
          autologin: false,
          providers: [
            {
              id: GoogleLoginProvider.PROVIDER_ID,
              provider: new GoogleLoginProvider('656974185597-41au7460ab7d72n2tkj0d5hd84i2hp51.apps.googleusercontent.com')
            },
          ],
          onError: (err) =>{
            console.error(err);
          }
        }as SocialAuthServiceConfig,
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
