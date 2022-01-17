import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { DemoDirectiveComponent } from './components/demo-directive/demo-directive.component';
import { VoitureComponent } from './components/voiture/voiture.component';

export const routes: Routes = [
    { path: 'directive', component: DemoDirectiveComponent },
    { path: 'forms', component: VoitureComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DemoRoutingModule{

}