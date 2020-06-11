import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: IUser;

  constructor(private http: HttpClient) { }

  loginUser(userName: string, password: string){

    //The keys used (username, password), must be all lowercase since something called "passport" expects it on the server.
    let loginInfo = { username: userName,
                      password: password,
                    };
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

    return this.http.post('/api/login', loginInfo, options)
      .pipe(tap(data => {
        this.currentUser = <IUser>data['user'];
      }))
      .pipe(catchError(err => {
        return of(false)
      }))
  }

  isAuthenticated(): boolean{
    //Remember that !! casts a value to a boolean
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string){
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;

    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

    return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);
  }

  checkAuthenticationStatus() {
    //"/api/currentIdentity" returns nothing if a user is not logged in.
    //Otherwise, it returns their identity as an object.
    this.http.get('/api/currentIdentity')
    .pipe(tap(data => {
      if(data instanceof Object) {
        this.currentUser = <IUser>data;
      }
    }))
    .subscribe();
  }

  logout(){
    this.currentUser = undefined;

    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
    return this.http.post('/api/logout', {}, options);
  }
}
