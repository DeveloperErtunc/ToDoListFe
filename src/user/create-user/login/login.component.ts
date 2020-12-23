import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ResponseUser, User } from 'src/models/user';
import { UserResponse } from 'src/models/userResponse';
import { TokenInterceptor } from 'src/services/interceptor/tokenInterceptor';
import { JwtService, TokenClass } from 'src/services/tokenservice/token';
import { UserService } from 'src/services/userservice/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private UserService:UserService,
    private RouterLink:Router,
    private TokenInterceptor:TokenInterceptor,
    private router:Router
  ) { }

  //#region  Variables
    t= false;
    public user:User = new User();
    public ResponseUser:ResponseUser = new ResponseUser();
    tokenClass:TokenClass = new TokenClass();
  //#endregion

  ngOnInit(): void {}

  public Login()
  {
    this.UserService.Login(this.user).subscribe(data => {
      this.ResponseUser = data;
      if(this.ResponseUser.isSuccess)
      {
        /*this.UserService.setToken(this.ResponseUser.message);*/
        this.UserService.tokenSubject.next(this.ResponseUser.token);
        let id   = parseInt(JwtService.DecodeToken(this.ResponseUser.token).UserID);
        if(id)
        {
          if(this.router.url == "/")
          {
            this.RouterLink.navigate(["tasks",id]);
            this.Login();
          }
          else{
            return;
          }
        }
      }
    });
  }
}
