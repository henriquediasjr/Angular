import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  intervalFired = new EventEmitter<number>();
  interval;
  lastNumber;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(){
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1)
    } , 1000);
    this.lastNumber++;
  }


}
