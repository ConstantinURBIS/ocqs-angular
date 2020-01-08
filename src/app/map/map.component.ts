import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  name = 'David';
  buttonState = true;
  constructor(){}
  
  resetButton(){
    this.name = '';
  }

  activateButton(){
    if (this.name.length > 0) {
      this.buttonState = false;
    }
    else{
      this.buttonState = true;
    }
    return this.buttonState;
  }
  
  ngOnInit() {
  }

}
