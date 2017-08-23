import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { RegComponent } from './reg/reg.component';
import {RouterModule} from "@angular/router";
import { AdminPageComponent } from './admin-page/admin-page.component';
import { OffersComponent } from './benefits/offers.component';
import { NewsComponent } from './news/news.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegComponent,
    AdminPageComponent,
    OffersComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([{path: 'cr', component: RegComponent}]),
    RouterModule.forRoot([{path: 'profile', component: AdminPageComponent}]),
    RouterModule.forRoot([{path: 'op', component:OffersComponent}]),
    RouterModule.forRoot([{path: 'np', component:NewsComponent}])


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
