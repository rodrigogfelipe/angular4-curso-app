import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {

  /*Atributos*/
  @Input() public progresso: number= 0/*progresso 25% significar o progresso de 100% da barra */

  constructor() { }

  ngOnInit() {
  }

}
