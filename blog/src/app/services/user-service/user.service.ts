import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http:HttpClient, private router:Router) { }

  private URL:string=environment.apiUrlBase + environment.userEndpoint; //endpoint for authoritative user
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };//request header



  public authUser(userCredential:any):Observable<any>{
    // Check if there is a user with given credential. userCredential has format:
    /*
    {
    "email": "userEmail",
    "password": "MD5 Hased Password"
    }
    */
    // Return an Oberservation
    return this.http.post(this.URL + environment.userAuthEndpoint, userCredential, this.httpOptions); // return a Oberseravtion (async)
  }

  public addUser(username:string){

    sessionStorage.setItem('user', username);
  }



  public logout():void{
    // end point /logout for logout user, which is clear user and role in session
    sessionStorage.removeItem('user');
    // sessionStorage.removeItem('role');

    this.router.navigate(['/login'])
    //redirect to login page
  }


  public getUserName():any{
    // Get user name from session
   return sessionStorage.getItem('user');
 }

 public getRole():any{
   // Get user role from session
   return sessionStorage.getItem('role');
 }



 public isLoggedIn():boolean{
   // Check if user is logged in
     if(sessionStorage.getItem('user')!=null){ //get user from session
       return true;
     }
     else{
       return false;
     }
 }


}
