import { Component } from '@angular/core';
import { User } from '../../shared/classes/user';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
 user={} as User;
  constructor( private userService:UserService, private router:Router) { }
  signup(){
   this.userService.addUser(this.user);
   this.router.navigate(["../auth"]);
  }
 

}
