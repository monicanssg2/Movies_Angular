import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _AuthService:AuthService){
 //   _AuthService.userData.subscribe(()=>
 //   {
 //     if(_AuthService.userData.getValue() != null)
 //     {
 //       setInterval(()=>this._AuthService.logout(), 10000);
 //     }
 //   })
  }
  title = 'week3';
}
