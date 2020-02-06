import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {

  /*Atributos*/
  public progresso: number= 75 /*progresso 25% significar o progresso de 100% da barra */

  constructor() { }

  ngOnInit() {
  }

}
