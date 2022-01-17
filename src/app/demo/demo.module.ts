import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoDirectiveComponent } from './components/demo-directive/demo-directive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoRoutingModule } from './demo-routing.module';
import { VoitureComponent } from './components/voiture/voiture.component';
import { VoitureFormComponent } from './components/voiture/voiture-form/voiture-form.component';
import { VoitureListComponent } from './components/voiture/voiture-list/voiture-list.component';



@NgModule({
  declarations: [
    DemoDirectiveComponent, 
    VoitureComponent, 
    VoitureFormComponent, 
    VoitureListComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DemoModule { }
