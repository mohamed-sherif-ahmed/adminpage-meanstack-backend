import {Component, EventEmitter, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface response{
  found: boolean;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  outputs: ['currentUserName', 'currentPassword' ]
})
export class LoginComponent implements OnInit {

  public currentUserName = new  EventEmitter<string>();
  public currentPassword = new  EventEmitter<string>();
  public found : boolean ;
   currentUser ={};
  loginPressed(username: string , password: string ) {
    console.log("hghwwg");
    this.currentUserName.emit(username);
    this.currentPassword.emit(password);
    this.currentUser = {
      username : username ,
      password : password
    };
    this.http.post<response>('/login',this.currentUser).subscribe(      (data) =>{
      this.found=data.found;
      console.log(this.found);
    });



  }
  constructor(private http : HttpClient) { }

  ngOnInit() {

  }

}
