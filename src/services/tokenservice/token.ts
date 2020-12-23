import { Injectable, NgModule } from "@angular/core";
import jwtDecode, * as jwt_decode from "jwt-decode";
import { Observable } from "rxjs";
import { User } from "src/models/user";

@Injectable()
@NgModule()

export  class JwtService{

  constructor(){}
public static DecodeToken(token:string):TokenClass{
   console.log(jwtDecode(token));
   return jwtDecode(token);
  }
}

export class TokenClass{
  UserID:any;
  Role:any;
} 