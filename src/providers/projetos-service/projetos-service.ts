import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the ProjetosServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProjetosServiceProvider {

  url:string = 'http://kutova.com/dev/todolist/api.php';

  constructor (public http: Http){}

  
  getProjetos():Promise <any[]> {

    return new Promise( resolve => {
      this.http.get(this.url+'/projetos').toPromise()
      .then(resposta => {
        let projetos = [];
        let dados = resposta.json();
        for(let i=0; i <dados.length; i++){
          projetos.push(
            {
              codigo: parseInt(dados[i].codigo),
              projeto: dados[i].projeto
            }
          );
        }
        resolve(projetos);
      });
    });
  }

  getProjeto(c:number):Promise <any> {

    return new Promise(resolve => {
      this.http.get(this.url+'/projetos/'+c).toPromise()
      .then(resposta =>{
        let dados = resposta.json();
        let projetos = {
          codigo: parseInt(dados.codigo),
          projeto: dados.projeto
        };
        resolve(projetos);
      });
    }); 
  }
  
  addProjeto(n:string): Promise<any>{

    let headers = new Headers({'Content-Type': 'application/json'});
    let projeto = {
      projeto: n
    }
    let body = JSON.stringify(projeto);  
    return new Promise(resolve => {

      this.http.post(this.url+'/projetos',body,{headers:headers}).toPromise()
      .then(resposta => {
        resolve(resposta.json());
      });
    });
  }
  editProjetos(c:number,n:string):Promise <any>{
    let headers = new Headers({'Content-Type': 'application/json'});

    let projeto = {
      projeto: n
    }
    let body = JSON.stringify(projeto);
    return new Promise(resolve =>{
      this.http.put(this.url+'/projetos/'+c,body,{headers:headers}).toPromise()
      .then(resposta => {
        resolve(resposta.json());
      });
    });
  }

  deleteProjetos(c:number): Promise <any>{

    return new Promise(resolve =>{
      this.http.delete(this.url+'/projetos/'+c).toPromise()
      .then(resposta =>{
        resolve(resposta.json());
      });
    });
  }
}
