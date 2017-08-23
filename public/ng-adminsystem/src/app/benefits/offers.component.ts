import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  currentNews ={};
  postPressed(name:String,address:String,zone:String,phone:String){

    this.currentNews ={
      name : name ,
      address : address,
      zone : zone ,
      phone : phone
    };
    this.http.post('/benefits/add',this.currentNews).subscribe();

  }
  constructor(private http : HttpClient) { }

  ngOnInit() {
  }

}
