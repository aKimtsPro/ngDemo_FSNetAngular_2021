import { Component, Input, OnInit } from '@angular/core';
import { Voiture } from 'src/app/models/voiture.model';

@Component({
  selector: 'app-voiture-list',
  templateUrl: './voiture-list.component.html',
  styleUrls: ['./voiture-list.component.scss']
})
export class VoitureListComponent implements OnInit {

  @Input()
  liste!: Voiture[];

  constructor() { }

  ngOnInit(): void {
  }

}
