import { Component, OnInit } from '@angular/core';
import { Voiture } from 'src/app/models/voiture.model';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.scss']
})
export class VoitureComponent implements OnInit {

  listVoiture : Array<Voiture> = [
    {
      modele: 'bipBoop',
      marque: 'BadiBap',
      carburant: 'essence',
      nombrePorte: 3,
      puissanceMoteur: 80
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onAddVoiture(toAdd: Voiture){
    this.listVoiture.push(toAdd);
  }

}
