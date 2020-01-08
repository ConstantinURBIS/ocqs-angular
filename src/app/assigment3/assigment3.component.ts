import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assigment3',
  templateUrl: './assigment3.component.html',
  styleUrls: ['./assigment3.component.css']
})
export class Assigment3Component implements OnInit {
  toogleVal = true;
  count = 0;
  constructor() { }
  
  togglePara(){
    this.toogleVal = !this.toogleVal;
    this.count = this.count + 1;
  }

  ngOnInit() {
  }

}
