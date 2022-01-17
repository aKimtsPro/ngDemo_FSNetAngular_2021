import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Chambre } from '../models/chambre.model';

@Injectable({
  providedIn: 'root'
})
export class ChambreService {

  

  constructor(private _client : HttpClient) { }
  
  // données en liste interne

  private listChambre: Chambre[] = []
  private listChanged = new BehaviorSubject<Chambre[]>(this.listChambre);
  
  subscribe( next : (next: Chambre[]) => void ) : Subscription {
    return this.listChanged.subscribe( next );
  }

  addChambre(toAdd: Chambre): void{
    this.listChambre.push(toAdd);
    this.listChanged.next( [ ...this.listChambre ] )
  }

  // données stockées sur API

  private readonly API_URL = 'http://localhost:3000'

  get() : Observable<Chambre[]>{
    return this._client.get<Chambre[]>( this.API_URL + '/chambres' )
  }

  insert(toInsert: Chambre): Observable<Chambre> {
    return this._client.post<Chambre>(this.API_URL + '/chambres', toInsert)
  } 

  getToken(){
    return 'fake_token';
  }
}
