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
  public resposta: string
  public rodada: number= 0
  public rodadaFrase: Frase /*classe Frase.model.ts*/

  constructor() {
    this.rodadaFrase = this.frases[this.rodada]/*this.rodada e iniciada com valor zero */
    console.log(this.rodadaFrase)}
  /*ngOnInit e implementado com interface de um componente*/ 
  ngOnInit() {
  }

/*Declarando metados*/
public atualizaResposta(resposta: Event): void {
  this.resposta= ((<HTMLInputElement>resposta.target).value) /*<HTMLInputElement acessar o value da resposta*/
  //console.log(this.resposta)

    } 

    public verificarResposta(): void {
      if(this.rodadaFrase.frasePtBr == this.resposta) {
        alert('A tradução esta correta') 

    /*trocar pergunta da rodada*/
     this.rodada++;
      this.rodadaFrase = this.frases[this.rodada]/*atualizar o obj rodadaFrase */
     console.log(this.rodadaFrase)
    } 
      else {
            alert('A tradução está errada')
          }
      }
  }
