import { Component, OnInit, OnChanges, Input} from '@angular/core';
import {Coracao} from '../shared/coracao.model'


@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  @Input() public tentativas: number
  /*Arrays de onj do coracao*/
  public coracoes: Coracao[] = [
    new Coracao(true),  new Coracao(true),  new Coracao(true)

  ]

  constructor() { 
    console.log(this.coracoes)
   
  }
  /* ngOnChanges é o metado responsavel pelo INPUT dos dados*/
  ngOnChanges(){
    if(this.tentativas !== this.coracoes.length) {
      let indice= this.coracoes.length - this.tentativas
      /*indice vale 1 decrementado que ficaria igual  3 - 2 -1 - 0 que e igual a zero, que e a primeira posicao do array*/
      this.coracoes[indice - 1].cheio = false
    }
    console.log('Tentativas recebidas do painel: ', this.tentativas)

  }

  ngOnInit() {
    
  }

}
