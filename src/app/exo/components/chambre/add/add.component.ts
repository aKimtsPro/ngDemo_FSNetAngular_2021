import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { doubleRoomValid, F_CHAMBRE_CREATE, simpleRoomValid } from 'src/app/exo/forms/chambre.form';
import { ChambreService } from 'src/app/services/chambre.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  form = new FormGroup(F_CHAMBRE_CREATE, [simpleRoomValid, doubleRoomValid]);

  constructor( private _service: ChambreService, private _router: Router ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.form)
    if( this.form.valid ){
      // this._service.addChambre( this.form.value );
      this._service.insert( this.form.value )
        .subscribe(response => this._router.navigateByUrl('exo/chambre/list'));
      
    }
  }

}
