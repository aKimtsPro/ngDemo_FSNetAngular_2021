import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { FormsModule } from '@angular/forms';
import { ExoModule } from './exo/exo.module';
import { DemoModule } from './demo/demo.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // ExoModule,
    // DemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
