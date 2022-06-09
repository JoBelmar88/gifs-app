import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _historial: string[] = [];

  get historial(){
    const historialArreglo = [];

    for (let i = 0; i < this._historial.length; i++) {
      historialArreglo[i] = this._historial[i];
    }
    return historialArreglo;
  }

  buscarGifs(query: string){
    query = query.trim().toLocaleLowerCase();
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
    }
  }

  constructor() { }
}
