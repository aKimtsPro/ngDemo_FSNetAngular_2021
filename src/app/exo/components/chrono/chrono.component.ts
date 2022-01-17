import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.scss']
})
export class ChronoComponent implements OnInit {

  secondPast = 0;
  private _interval!: any;
  play = false;
  constructor() { }

  ngOnInit(): void {
  }

  onPlay(){
    if( !this.play ){
      this._interval = setInterval(() => this.secondPast++, 1000);
      this.play = true;
    }
  }

  onPause(){
    if( this.play ){
      clearInterval( this._interval );
      this.play = false;
    }
  }

  onReset(){
    if( !this.play )
      this.secondPast = 0;
  }
}
