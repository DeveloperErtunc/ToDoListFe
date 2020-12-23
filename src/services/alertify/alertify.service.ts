import { Injectable } from '@angular/core';
declare let alertify: any;
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }
  error(message: string) {
    alertify.error(message);
  }
}
