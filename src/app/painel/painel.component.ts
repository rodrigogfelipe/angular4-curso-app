import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import {Frase} from '../shared/frase.model'/*importando shared model*/ 
import {FRASES} from './frases-mock' /*importação da frases-mock.ts */
import { from } from 'rxjs';


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {
  /*Atributos*/
  public frases: Frase[] = FRASES
  public introducao: string = 'Traduza a frase'
  public resposta: string= '' /*resposta foi declarado como vazio para não mostra a msg undefined na texarea*/
  public rodada: number= 0
  public rodadaFrase: Frase /*classe Frase.model.ts*/
  public progresso: number= 0
  public tentativas: number = 3
/*encerrarJogo é o atributo da class app.components */
 @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter() /*EventEmitter é a importação da classe PainelComponent*/

  constructor() {
    this.atualizaRodada()/*Metado atualizarRodada*/
  }
  /*ngOnInit e implementado com interface de um componente*/ 
  ngOnInit() {
  }

  ngOnDestroy(){
    console.log('Componente do painel destruido')
  }

/*Declarando metados*/
public atualizaResposta(resposta: Event): void {
  this.resposta= ((<HTMLInputElement>resposta.target).value) /*<HTMLInputElement acessar o value da resposta*/
  //console.log(this.resposta)

    } 

    public verificarResposta(): void {
      if(this.rodadaFrase.frasePtBr == this.resposta) {

    /*trocar pergunta da rodada*/
      this.rodada++;

      /*Progresso*/
      this.progresso = this.progresso + (100 / this.frases.length)/**frases.length possui 4 frases / 100 = 25% de progresso na barra */
      if(this.rodada ===4) {
       this.encerrarJogo.emit('vitoria')
      }

      this.atualizaRodada()/*Metado atualizarRodada*/
    } 
      else {
        /*diminuir  a variavel tentativas*/
        this.tentativas--
        if(this.tentativas === -1)
        this.encerrarJogo.emit('derrota')
          }
      }

    public atualizaRodada(): void{
      /*define a frase da rodada*/
      this.rodadaFrase = this.frases[this.rodada]
      /*limpar o textarea resposta*/
      this.resposta= ''
    }
  }
