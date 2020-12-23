export class UserResponse{
  message!:string;
  isSuccess:boolean|undefined;
  claimRole:Array <string> = new Array <string>();
  erorrs:Array <string> = new Array <string>();
}