import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Chambre } from 'src/app/models/chambre.model';
import { ChambreService } from 'src/app/services/chambre.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  liste: Chambre[] = [];
  liste$ : Observable<Chambre[]> = of();

  constructor(private _service: ChambreService) { }

  ngOnInit(): void {
    this._service.get().subscribe(reponse => this.liste = reponse);
    this.liste$ = this._service.get();
  }

}
