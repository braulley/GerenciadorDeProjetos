import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TarefasServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TarefasServiceProvider {

  tarefas = [
    {codigo:1, projeto:1, descricao: 'Elaborar primeira prova', data: new Date(2017,2,29),prioridade: 1},
    {codigo:2, projeto:1, descricao: 'Fechar o diário', data: new Date(2017,5,17),prioridade: 2},
    {codigo:3, projeto:2, descricao: 'Gravar vídeo de apresentação', data: new Date(2017,2,10),prioridade: 1},
    {codigo:4, projeto:3, descricao: 'Planejar campanhas', data: new Date(2017,3,2),prioridade: 3}
  ];
  ultimoCodigo = 4;

  getTarefas():any [] {
    return this.tarefas;
  }
  editTarefas(c:number,p:number,d:string,dt:Date,pr:number){
    for(let i=0;i<this.tarefas.length;i++){
      if(this.tarefas[i].codigo == c){
        this.tarefas[i].projeto = p;
        this.tarefas[i].descricao = d;
        this.tarefas[i].data = dt;
        this.tarefas[i].prioridade = pr;
      }
    }

  }
  addTarefas(p:number,d:string,dt:Date,pr:number){
    this.ultimoCodigo++;
    this.tarefas.push({codigo: this.ultimoCodigo, projeto: p, descricao:d, data: dt,prioridade: pr});

  }
  deleteTarefas(c:number){
    for(let i=0;i<this.tarefas.length;i++){
      if(this.tarefas[i].codigo==c){
        this.tarefas.splice(i,1);
      }
    }
  }

  constructor(public http: Http) {
    console.log('Hello TarefasServiceProvider Provider');
  }

}
