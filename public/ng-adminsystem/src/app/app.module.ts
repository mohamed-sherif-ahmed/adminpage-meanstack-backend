import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { RegComponent } from './reg/reg.component';
import {RouterModule} from "@angular/router";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([{path: 'cr', component: RegComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
