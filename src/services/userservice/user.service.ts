import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ResponseUser, User} from 'src/models/user';
import { Observable, Subject } from 'rxjs';
import { ConfigurationAPI } from '../config/configurationAPI';
import {UserResponse} from 'src/models/userResponse';
@Injectable()
export class UserService {
  tokenSubject = new Subject<string>();

  constructor(
    private HttpCilent:HttpClient
  ) { }

  public  RegisterUser(user:User):Observable<UserResponse>
  {
   return this.HttpCilent.post<UserResponse>(ConfigurationAPI.User+"register",user);
  }

  public setToken(token:string) {
    this.tokenSubject.next(token);
  }

  public Login(user:User):Observable<ResponseUser>
  {
   return this.HttpCilent.post<ResponseUser>(ConfigurationAPI.User+"login",user);
  }

  public  GetAllUser(id:number):Observable<ResponseUser[]>
  {
   return this.HttpCilent.get<ResponseUser[]>(ConfigurationAPI.User+"users/id?id="+id);
  }

  public ByID(id:number):Observable<ResponseUser>
  {
   return this.HttpCilent.get<ResponseUser>(ConfigurationAPI.User+"id?id="+id);
  }
}
