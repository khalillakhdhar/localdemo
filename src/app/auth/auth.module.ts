import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from "../footer/footer.component";
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        AuthComponent,
        SigninComponent,
        SignupComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        FooterComponent,
        FormsModule
    ]
})
export class AuthModule { }