import { UserService } from './services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from './models/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'IntroPruebasUnitarias';
  myVar = 'Hola Mundo';
  saludo = 'Buenos dias Juan';
  users: User[] = [];


  constructor(private _userSerice: UserService) {

  }

  ngOnInit(){
    this.getUsers();
  }


  par(numero: number): boolean{
    return numero % 2 === 0 ? true : false;
  }


  getUsers(){
    this._userSerice.getAll().subscribe( users => {
      this.users = users;
      console.log(this.users);
    });
  }




}
