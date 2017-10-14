import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ProjetosServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProjetosServiceProvider {

  projetos = [
    {codigo:1, nome:'Algoritmos'},
    {codigo:2, nome: 'Arquitetura de Computadores'},
    {codigo:3, nome: 'EAD'},
    {codigo:4, nome: 'Modelagem de Processos'},
    {codigo:5, nome: 'Segurança da Informação'},
    {codigo:6, nome: 'ATP'},
    {codigo:7, nome: 'POO'}
  ];

  ultimoCodigo:number = 7;

  
  getProjetos() {
    return this.projetos;
  }
  
  addProjeto(n:string){
    this.ultimoCodigo++;
    this.projetos.push({codigo: this.ultimoCodigo, nome:n});

  }
  editProjetos(c:number,n:string){

    for(let i=0;i<this.projetos.length;i++){
      if(this.projetos[i].codigo == c){
        this.projetos[i].nome = n;
      }
    }
  }

  deleteProjetos(c:number,n:string){
    
        for(let i=0;i<this.projetos.length;i++){
          if(this.projetos[i].codigo == c){
            this.projetos.splice(i,1);
            break;
          }
        }
      }

}
