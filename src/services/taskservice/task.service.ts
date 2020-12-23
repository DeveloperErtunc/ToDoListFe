import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/models/task';
import { ConfigurationAPI } from '../config/configurationAPI';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private Httpclient:HttpClient) { }

  public Add(task:Task):Observable<Task>
  {
   return this.Httpclient.post<Task>(ConfigurationAPI.Task,task)
  }

  public Update(task:Task):Observable<boolean>
  {
   return this.Httpclient.post<boolean>(ConfigurationAPI.Task+"update",task)
  }

  public GetAll():Observable<Task[]>
  {
   return this.Httpclient.get<Task[]>(ConfigurationAPI.Task+"byid")
  }

  public Status(id:number|undefined):Observable<Task[]>
  {
   return this.Httpclient.get<Task[]>(ConfigurationAPI.Task+"status/id?id="+id);
  }

  public CLose(task:Task):Observable<Task[]>
  {
   return this.Httpclient.post<Task[]>(ConfigurationAPI.Task+"Close",task)
  }


}
