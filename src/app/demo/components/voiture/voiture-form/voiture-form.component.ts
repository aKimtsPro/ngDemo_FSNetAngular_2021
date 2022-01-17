import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Voiture } from 'src/app/models/voiture.model';
import { VoitureValidators } from '../validators/voiture-validator';

@Component({
  selector: 'app-voiture-form',
  templateUrl: './voiture-form.component.html',
  styleUrls: ['./voiture-form.component.scss']
})
export class VoitureFormComponent implements OnInit {

  @Output('add-voiture')
  addVoitEmitter = new EventEmitter<Voiture>();

  voitureForm: FormGroup = new FormGroup({
    'modele': new FormControl(null, [Validators.required, Validators.minLength(5)]),
    'marque': new FormControl(null, { validators:Validators.required, updateOn: 'blur'}),
    'carburant': new FormControl(null, { validators: Validators.required, updateOn: 'change'}),
    'nombrePorte': new FormControl(null, Validators.required),
    'puissanceMoteure': new FormControl(null, Validators.required)
  },{
    validators:  VoitureValidators.globalMarqueModele,
    updateOn: 'submit'
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log( this.voitureForm );

    if( this.voitureForm.valid ){
      const value = this.voitureForm.value;
      this.addVoitEmitter.emit( {
        marque: value.marque,
        modele: value.modele,
        carburant: value.carburant,
        nombrePorte: value.nombrePorte,
        puissanceMoteur: value.puissanceMoteure
      } )
    }
  }

}
