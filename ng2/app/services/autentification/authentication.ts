import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../../model/user';

export class User implements IUser{
  constructor(
    public Login: string,
    public Password: string) { }
}

var users : IUser[] = [
new User('admin@admin.com','adm9'),
new User('user1@gmail.com','a23')
];

@Injectable()
export class AuthenticationService {

  constructor(private _router: Router){}

  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['login']);
  }

  login(user : IUser){
    let authenticatedUser : IUser = users.find(u => u.Login === user.Login);
    if (authenticatedUser && authenticatedUser.Password === user.Password){
      localStorage.setItem("user", authenticatedUser.toString());
      this._router.navigate(['']);      
      return true;
    }
    return false;

  }

  checkCredentials(){
    if (localStorage.getItem("user") === null){
      this._router.navigate(['']);
    }
  } 
}