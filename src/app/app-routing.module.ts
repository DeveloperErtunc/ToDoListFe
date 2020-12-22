import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddtaskComponent } from 'src/task/addtask/addtask.component';
import { TasksComponent } from 'src/task/tasks/tasks.component';
import { CreateUserComponent } from 'src/user/create-user/create-user.component';
import { LoginComponent } from 'src/user/create-user/login/login.component';

const routes: Routes = [
{path:"signup",component:CreateUserComponent},
{path:"login",component:LoginComponent},
{path:"addtask/:id",component:AddtaskComponent},
{path:"tasks/:id",component:TasksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
