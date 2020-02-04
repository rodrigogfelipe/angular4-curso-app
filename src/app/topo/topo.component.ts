import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {
  /*Declarando atributo*/ 
  public titulo: string = 'Aprendendo Inglês' /*String interpolation enviado para o template HTML'*/

  constructor() { }

  ngOnInit() {
  }

}
