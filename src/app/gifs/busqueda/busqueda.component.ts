import { Component, ElementRef, Injectable, Input, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent  {

  constructor(private gifsService: GifsService){}

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  buscar(): void{
    const valor = this.txtBuscar.nativeElement.value;
    if(!valor.trim().length){
      return;
    }

    this.gifsService.buscarGifs( valor );
    this.txtBuscar.nativeElement.value = '';
  }



}
