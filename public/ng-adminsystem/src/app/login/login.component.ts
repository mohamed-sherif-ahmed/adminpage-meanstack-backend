import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface response{
  found: boolean;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

  public found : boolean ;
   currentUser ={};
  loginPressed(username: string , password: string ) {
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
