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
    { codigo: 1, nome: 'Algoritmos' },
    { codigo: 2, nome: 'Pós-graduação' },
    { codigo: 3, nome: 'EAD' }
    ];
    ultimoCodigo = 3;

  
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
