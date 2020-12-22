import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ResponseUser, User } from 'src/models/user';
import { UserResponse } from 'src/models/userResponse';
import { UserService } from 'src/services/userservice/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private UserService:UserService,
    private RouterLink:Router
  ) { }
public user:User = new User();
public userResponse:UserResponse = new UserResponse();
public ResponseUser:ResponseUser = new ResponseUser();
t = false;
  ngOnInit(): void {}

  public Login()
  {
    this.UserService.Login(this.user).subscribe(data => {
      this.ResponseUser = data;
      this.t = true;
      if(this.ResponseUser.id)
      {
        this.RouterLink.navigate(["tasks",this.ResponseUser.id])
      }
    });
  }
}
