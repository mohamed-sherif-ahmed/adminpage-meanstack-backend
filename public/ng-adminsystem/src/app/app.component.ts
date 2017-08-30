import { Component } from '@angular/core';
import {httpFactory} from "@angular/http/src/http_module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  username: string;
  password: string;
  title = 'app';




}
