import { Component } from '@angular/core';
import { User } from '../../shared/classes/user';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  user={} as User;
  // pour injecter le service UserService dans le composant SigninComponent il faut l'ajouter dans le constructeur
  constructor(private userService:UserService) { }
  signin(){
    let user=this.userService.authUser(this.user.email,this.user.password);
    if(user==null)
    {
      alert("email ou mot de passe incorrect");
    }
    else
    {
      localStorage.setItem("user",JSON.stringify(user));
     // this.router.navigate(["../dashboard"]);

     //alert("Bienvenue "+user.nom+" "+user.prenom);
     window.location.href="/home";

    }
  }

}
