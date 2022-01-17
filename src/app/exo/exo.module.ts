import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChronoComponent } from './components/chrono/chrono.component';
import { ChronoPipe } from './pipes/chrono.pipe';
import { ExoRoutingModule } from './exo-routing.module';
import { ChambreComponent } from './components/chambre/chambre.component';
import { ChambreService } from '../services/chambre.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './components/chambre/list/list.component';
import { AddComponent } from './components/chambre/add/add.component';


@NgModule({
  declarations: [ChronoComponent, ChronoPipe, ChambreComponent, ListComponent, AddComponent],
  imports: [
    CommonModule,
    ExoRoutingModule,
    ReactiveFormsModule
  ]
})
export class ExoModule { }
