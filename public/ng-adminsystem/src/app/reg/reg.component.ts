import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginComponent} from "../login/login.component";
interface response{
  found: boolean;
}
@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  namee:string;
  public found : boolean ;
  currentUser ={};
  current_User ={};
  showen : boolean = true;
  createPressed(username: string , password: string , name: string , address: string ) {
    this.currentUser = {
      username : username ,
      password : password ,
      name: name ,
      address: address
    };
   this.current_User={username : username ,
     password : password };
    this.http.post('/register',this.currentUser).subscribe();
    this.http.post<response>('/login',this.current_User).subscribe(      (data) =>{
      this.found=data.found;
      console.log(this.found);
      this.showen=false;
    });

    }
  constructor(private http : HttpClient) { }

  ngOnInit() {
  }


}
