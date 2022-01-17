import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChronoComponent } from './components/chrono/chrono.component';
import { ChronoPipe } from './pipes/chrono.pipe';
import { ExoRoutingModule } from './exo-routing.module';


@NgModule({
  declarations: [ChronoComponent, ChronoPipe],
  imports: [
    CommonModule,
    ExoRoutingModule
  ]
})
export class ExoModule { }
