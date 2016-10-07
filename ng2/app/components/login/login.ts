import { Component, ElementRef } from '@angular/core';
import { AuthenticationService, User } from '../../services/autentification/authentication'
import { IUser } from '../../model/user'
 
@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    templateUrl: './app/components/login/login.html'
})
 
export class LoginComponent {
    public user : IUser = new User('','');
    public errorMsg = '';
 
    constructor(private _service:AuthenticationService) {}
 
    login() {
        if(!this._service.login(this.user)){
            this.errorMsg = 'Failed to login';
        }
    }
}