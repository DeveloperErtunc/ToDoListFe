export class User{
public UserName!:string;
public NameSurName!:string;
public Password!:string;
public ConfirmPassword!:String;
public Email!:string;
public id!:number;  
}
export class ResponseUser{
  public message:string|undefined;
  public id!:number;
  public userName!:string;
  public nameSurName!:string;
  public password!:string;
  public confirmPassword!:String;
  public email!:string;
  public assignee!:number;
  public role!:string;
  }