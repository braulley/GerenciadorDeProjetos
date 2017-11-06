import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the TarefasServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TarefasServiceProvider {

    url:string = 'http://kutova.com/dev/todolist/api.php';
    
  constructor(public http: Http) {}
  

  getTarefas():Promise<any[]> {

    return new Promise( resolve => {

    //Faz a requisição
    this.http.get(this.url+'/tarefas')
    .toPromise()// Resposta convertida em Promise, estará disponível quando a resposyta
    //estiver pronta

    //O que acontecerá quando a resposta chegar, o then recebe a resposta
    //Retornará uma string
    .then(resposta => {
      let dados = resposta.json();
      let tarefas = [];
      for (let i = 0; i < dados.length;i++) {
        tarefas.push({
          codigo:parseInt(dados[i].codigo),
          projeto: parseInt(dados[i].projeto),
          descricao: dados[i].descricao,
          data: new Date(parseInt(dados[i].data.substr(0,4)),
          parseInt(dados[i].data.substr(5,2))-1,
          parseInt(dados[i].data.substr(8,2))),
          prioridade: parseInt(dados[i].prioridade)
        });  
      }
      resolve(tarefas);
    });
    });
  }
  editTarefas(c:number,p:number,d:string,dt:Date,pr:number): Promise<any>{

    let headers = new Headers({'Content-Type': 'application/json'});
    let tarefas = {
      projeto: p,
      descricao: d,
      data: dt.getFullYear()+"-"+
      ("0"+(dt.getMonth()+1)).substr(-2,2)+"-"+
      ("0"+dt.getDate()).substr(-2,2),
      prioridade: pr

    }
    let body = JSON.stringify(tarefas);
    return new Promise(resolve => {

      this.http.put(this.url+'/tarefas/'+c,body,{headers: headers}).toPromise()
      .then(resposta => {
        resolve(resposta.json());
      });
    });
  }


  addTarefas(p:number,d:string,dt:Date,pr:number): Promise<any>{
    let headers = new Headers({'Content-Type': 'application/json'});
    let tarefas = {
      projeto: p,
      descricao: d,
      data: dt.getFullYear()+"-"+
      ("0"+(dt.getMonth()+1)).substr(-2,2)+"-"+
      ("0"+dt.getDate()).substr(-2,2),
      prioridade:pr
    }
    let body = JSON.stringify(tarefas);

    return new Promise(resolve => {

      this.http.post(this.url+'/tarefas',body,{headers: headers}).toPromise()
      .then(resposta => {
        resolve(resposta.json());
      });
    });
  }
  deleteTarefas(c:number): Promise <any> {

    return new Promise(resolve => {

      this.http.delete(this.url+'/tarefas/'+c).toPromise()
      .then(resposta =>{
        resolve(resposta.json());
      });
    });
  }

  getTarefa(t:number):Promise<any> {
    
        return new Promise( resolve => {
    
        //Faz a requisição
        this.http.get(this.url+'/tarefas/'+t)
        .toPromise()// Resposta convertida em Promise, estará disponível quando a resposyta
        //estiver pronta
    
        //O que acontecerá quando a resposta chegar, o then recebe a resposta
        //Retornará uma string
        .then(resposta => {
          let dados = resposta.json();
          let tarefas = {
            codigo:parseInt(dados.codigo),
            projeto: parseInt(dados.projeto),
            descricao: dados.descricao,
            data: new Date(parseInt(dados.data.substr(0,4)),
            parseInt(dados.data.substr(5,2)),
            parseInt(dados.data.substr(8,2))),
            prioridade: parseInt(dados.prioridade)
          }
          resolve(tarefas);
      });
    });
  }
}
