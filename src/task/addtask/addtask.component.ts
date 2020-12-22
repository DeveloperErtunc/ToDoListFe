import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, RouterLink,Router } from '@angular/router';
import { Task } from 'src/models/task';
import { ResponseUser } from 'src/models/user';
import { TaskService } from 'src/services/taskservice/task.service';
import { UserService } from 'src/services/userservice/user.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.scss']
})
export class AddtaskComponent implements OnInit {

  constructor(
    private TaskService:TaskService,
    private UserService:UserService,
    private ActivatedRoute:ActivatedRoute,
    private Router:Router
    ) { }
  task:Task = new Task();
  users:ResponseUser[]|undefined;
  validation = false;
  ngOnInit():
  void {
    this.UserService.GetAllUser(this.ActivatedRoute.snapshot.params.id).subscribe(data => {
      this.users = data;
    console.log(this.users);
    })
    
  }
 
  Add(_form:NgForm)
  {
    if(_form.valid)
    {
      this.TaskService.Add(this.task).subscribe(data => {
        console.log(data);
      this.Router.navigate(['tasks',this.ActivatedRoute.snapshot.params.id]);
      });
      
    }
    else{
      this.validation = true;
    }
  }
}
