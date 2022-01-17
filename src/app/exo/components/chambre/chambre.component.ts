import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ChambreService } from 'src/app/services/chambre.service';
import { F_CHAMBRE_CREATE } from '../../forms/chambre.form';

@Component({
  selector: 'app-chambre',
  templateUrl: './chambre.component.html',
  styleUrls: ['./chambre.component.scss']
})
export class ChambreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
