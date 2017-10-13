import './rxjs-extensions';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { UsersComponent }      from './users.component';
import { UserDetailComponent }  from './user-detail.component';
import { UserService }          from './user.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    UserDetailComponent,
    UsersComponent
  ],
  providers: [ UserService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
