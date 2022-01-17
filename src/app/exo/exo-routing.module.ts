import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/chambre/add/add.component';
import { ChambreComponent } from './components/chambre/chambre.component';
import { ListComponent } from './components/chambre/list/list.component';
import { ChronoComponent } from './components/chrono/chrono.component';

export const routes: Routes = [
    { path: 'chrono', component: ChronoComponent },
    { path: 'chambre', component: ChambreComponent, children: [
        { path: 'add', component: AddComponent },
        { path: 'list', component: ListComponent },
    ] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExoRoutingModule{

}