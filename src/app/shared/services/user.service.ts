import { Injectable } from '@angular/core';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:User[]=[];
  constructor() { }
  addUser(user:User){
    this.users.push(user);
  }
  getUsers(){
    return this.users;
  }
  getUser(index:number){
    return this.users[index];
  }
  deleteUser(index:number){
    this.users.splice(index,1);
  }
  updateUser(index:number,user:User){
    this.users[index]=user;
  }
  authUser(email:string,password:string){
    let user=this.users.find(user=>user.email===email && user.password===password);
    if(user){
      return user;
    }
    return null;
  }
  
}
