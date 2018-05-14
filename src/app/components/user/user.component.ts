import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  hobby:string;
  showData: boolean;

  constructor() { }

  ngOnInit() {
    this.name = 'OK Alexa';
    this.age = 0;
    this.email = 'okAlexa@test.de'
    this.hobby = 'coding'
    this.showData = true;
  }

  toggleData(){
    if(this.showData == true){
      this.showData = false;
    }else{
      this.showData = true;
    }
  }
}

