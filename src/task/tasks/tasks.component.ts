import { Component, OnInit } from '@angular/core';
import { Task } from 'src/models/task';
import { TaskService } from 'src/services/taskservice/task.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/services/userservice/user.service';
import { ResponseUser } from 'src/models/user';
import { UserResponse } from 'src/models/userResponse';
import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
 taskArray:Array <Task> = new Array<Task>();
 user:ResponseUser= new ResponseUser(); 
  constructor(
    private Taskservice:TaskService,
    private ActivatedRoute:ActivatedRoute,
    private UserService:UserService
  ) { }
    id:number|undefined;
  ngOnInit(): void {
    this.UserService.ByID(this.ActivatedRoute.snapshot.params.id).subscribe(
      data => {
        this.user = data;
        console.log(this.user.role);
      this.Taskservice.GetAll().subscribe(data2 => {
        if(data.role == "Admin")
        {
          this.UserService.GetAllUser(this.ActivatedRoute.snapshot.params.id).subscribe(data3 => 
            {
              for(let task of data2)
              {
                for(let user of data3)
                {
                  if(user.assignee == task.assignee)
                  {
                    task.nameUserName =  user.nameSurName;
                     task.due_date = task.due_date?.slice(0,10);
                    this.taskArray.push(task);
                  }
                }
              }
            });
        }
        else{
          for(let task_ of data2)
          {
           
            if(data.assignee == task_.assignee)
            { 
              task_.due_date = task_.due_date?.slice(0,10);
              task_.nameUserName =  data.nameSurName;
              this.taskArray.push(task_);
            }
          }
        }
        });
    });
  }

  Complete(id:number|undefined)
  {
    let id2 =id;
    this.Taskservice.Status(id2).subscribe(lisTasks => {
      
      if(this.user.role == "Admin")
        {
          this.UserService.GetAllUser(this.ActivatedRoute.snapshot.params.id).subscribe(listUsers => 
            {
              this.taskArray.length = 0;
              for(let task of lisTasks)
              {
                for(let user of listUsers)
                {
                  if(user.assignee == task.assignee)
                  {
                    task.nameUserName =  user.nameSurName;
                     task.due_date = task.due_date?.slice(0,10);
                    this.taskArray.push(task);
                  }
                }
              }
            });
        }
        else{
          this.taskArray.length = 0;
          for(let task_ of lisTasks)
          {
           
            if(this.user.assignee == task_.assignee)
            { 
              task_.nameUserName =  this.user.nameSurName;
              this.taskArray.push(task_);
            }
          }
      }
    });
  }
}
