import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/models/user';
import { UserService } from 'src/services/userservice/user.service';
import {UserResponse} from 'src/models/userResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  //#region Variables
  user:User = new User();
  userResponse:UserResponse = new UserResponse();
  validation =false;
  //#endregion

  constructor(
    private UserService:UserService,
    private Router:Router
  ){}

  ngOnInit(): void {
  }

  public Register(ngForm:NgForm)
  {
    this.userResponse.erorrs.length  = 0;
    this.userResponse.isSuccess = undefined;
    if(ngForm.valid)
    {
      if(!this.user.Email.includes("@"))
      {
        this.userResponse.erorrs.push("Pleaae, check your Mail.");
        return;
      }
      if(this.user.ConfirmPassword == this.user.Password)
      {
        this.UserService.RegisterUser(this.user).subscribe(data => 
          {
            this.userResponse  = data;
            if(this.userResponse.isSuccess)
            {
              this.Router.navigate(["/login"]);
            }
            else{
              console.log(this.userResponse);
              console.log(this.userResponse.erorrs);
              return;
            }
          });
      }
      else{
        this.userResponse.erorrs.push("Passwords do not match");
      }
    }

    else{
      this.validation = true;
    }
  }
}