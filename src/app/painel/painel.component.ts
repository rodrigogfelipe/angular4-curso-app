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
  public resposta: string= '' /*resposta foi declarado como vazio para não mostra a msg undefined na texarea*/
  public rodada: number= 0
  public rodadaFrase: Frase /*classe Frase.model.ts*/
  public progresso: number= 0

  constructor() {
    this.atualizaRodada()/*Metado atualizarRodada*/
  }
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

      /*Progresso*/
      this.progresso = this.progresso + (100 / this.frases.length)/**frases.length possui 4 frases / 100 = 25% de progresso na barra */
      console.log(this.progresso)

      this.atualizaRodada()/*Metado atualizarRodada*/
    } 
      else {
            alert('A tradução está errada')
          }
      }

    public atualizaRodada(): void{
      /*define a frase da rodada*/
      this.rodadaFrase = this.frases[this.rodada]
      /*limpar o textarea resposta*/
      this.resposta= ''
    }
  }
