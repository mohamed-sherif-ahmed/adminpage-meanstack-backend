import {Component, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  outputs: ['currentUserName', 'currentPassword' ]
})
export class LoginComponent implements OnInit {
  public currentUserName = new  EventEmitter<string>();
  public currentPassword = new  EventEmitter<string>();
  loginPressed(username: string , password: string ) {
    this.currentUserName.emit(username);
    this.currentPassword.emit(password);
  }
  constructor() { }

  ngOnInit() {
  }

}
