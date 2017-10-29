import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the UsuarioServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioServiceProvider {

  usuarios = [
    {codigo:1, nome:'Ana Moreira', tarefa: 9,observacao:'aksasmamsak'},
    {codigo:2, nome:'Joao Andrade ',tarefa: 10, observacao:'asasçasaḉḉasa'},
    {codigo:3, nome:'Marcio Souza', tarefa: 9, observacao:'as,aos,al,s,a'},
    {codigo:4, nome:'Jorge Soares', tarefa: 13, observacao:'lsa,lsça.aç.sa'}
  ];

  ultimoCod = 4;

  getUsuarios():any {
    return this.usuarios;
  }

  editUsuarios(c:number,n:string,t:number,o:string){
    for(let i=0;i<this.usuarios.length;i++){
      if(this.usuarios[i].codigo == c){
        this.usuarios[i].nome = n;
        this.usuarios[i].tarefa = t;
        this.usuarios[i].observacao = o;
      }
    }
  }

  addUsuarios(n:string,t:number,o:string){
    this.ultimoCod++;
    this.usuarios.push({codigo: this.ultimoCod, nome:n, tarefa: t,observacao:o});
  }

  deleteUsuarios(c){
    for(let j=0;j<this.usuarios.length;j++){
      if(this.usuarios[j].codigo == c){
        this.usuarios.splice(j,1);
      }
    }
  }

  constructor(public http: Http) {
    console.log('Hello UsuarioServiceProvider Provider');
  }

}
