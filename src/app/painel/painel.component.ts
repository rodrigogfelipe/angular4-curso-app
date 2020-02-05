import { Component, OnInit } from '@angular/core';
import {Frase} from '../shared/frase.model'/*importando shared model*/ 
import {FRASES} from './frases-mock' /*importação da frases-mock.ts */
import { from } from 'rxjs';


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  /*Atributos*/
  public frases: Frase[] = FRASES
  public introducao: string = 'Traduza a frase'

  constructor() {console.log(this.frases)}
  /*ngOnInit e implementado com interface de um componente*/ 
  ngOnInit() {
  }
  
/*Declarando metados*/
public atualizaReposta(): void {
  console.log('teste')

}

}
