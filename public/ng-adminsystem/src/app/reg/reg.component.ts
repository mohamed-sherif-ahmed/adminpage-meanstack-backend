import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
interface response{
  username : string ,
  password : string ,
  name: string ,
  address: string
}
@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  namee:string;
  currentUser ={};
  createPressed(username: string , password: string , name: string , address: string ) {
    this.currentUser = {
      username : username ,
      password : password ,
      name: name ,
      address: address
    };
    this.http.post('/register',this.currentUser).subscribe();

    }
  constructor(private http : HttpClient) { }

  ngOnInit() {
  }

}
