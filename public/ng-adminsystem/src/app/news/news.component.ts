import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  currentNews ={};
  postPressed(title:String,content:String){

    this.currentNews ={
      title : title,
      body :content
    };
    this.http.post('/news/add',this.currentNews).subscribe();

  }
  constructor(private http : HttpClient) { }

  ngOnInit() {
  }

}
