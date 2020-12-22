import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from 'src/user/create-user/create-user.component';
import {HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginComponent } from 'src/user/create-user/login/login.component';
import { FormsModule } from '@angular/forms';
import { UserService } from 'src/services/userservice/user.service';
import { AddtaskComponent } from 'src/task/addtask/addtask.component';
import { TasksComponent } from 'src/task/tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    LoginComponent,
    AddtaskComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
