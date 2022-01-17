import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ChronoComponent } from './exo/components/chrono/chrono.component';

const routes: Routes = [
  { path: "", redirectTo:"accueil", pathMatch: "full" },
  { path: "accueil", component: AccueilComponent },
  {
    path: 'exo', 
    loadChildren: () => import('./exo/exo-routing.module').then(m => m.ExoRoutingModule)
  },
  {
    path: 'demo', 
    loadChildren: () => import('./demo/demo-routing.module').then(m => m.DemoRoutingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
