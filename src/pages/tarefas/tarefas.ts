import { Component ,Pipe, PipeTransform} from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import {TarefasServiceProvider} from '../../providers/tarefas-service/tarefas-service';
import {ProjetosServiceProvider} from  '../../providers/projetos-service/projetos-service';
import {TarefaPage} from '../tarefa/tarefa';

/**
 * Generated class for the TarefasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tarefas',
  templateUrl: 'tarefas.html',
})
export class TarefasPage {

  tarefas: any[] = [];
  projetos: any[] = [];
  filtroTarefas = {};
  locationNameProject: any;



  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public tarefasService: TarefasServiceProvider,
    public projetosService: ProjetosServiceProvider) {
 
      //this.projetos = projetosService.getProjetos();
      //this.tarefas = tarefasService.getTarefas();
     
    }
    
    ionViewDidEnter(){
      this.tarefasService.getTarefas().then(dados => {
        this.tarefas = dados;
      });
      this.projetosService.getProjetos().then(dados =>{
        this.projetos = dados;
      });
    }

    nomeProjeto(c) {
      for(let i in this.projetos) {
        if(this.projetos[i].codigo == c){
          return this.projetos[i].projeto;
        }
      }
      return "Projeto não encontrado";
    }

    selecionaTarefa(t:number){
      this.navCtrl.push(TarefaPage,{codigo:t, novo:false });
    }

    novaTarefa(){
      this.navCtrl.push(TarefaPage,{codigo:0, novo:true });     
    }

  limparFiltros(){
    this.filtroTarefas = {};
    this.menuCtrl.close();
  }

  filtroProjeto(c){
    this.filtroTarefas = {projeto: c};
    this.menuCtrl.close();
  }
  filtroDias(d){
    this.filtroTarefas = { dias: d};
    this.menuCtrl.close();
  }

}

@Pipe({
  name: 'filtro'
})

export class Filtro implements PipeTransform {
  transform(itens:any[],filtro:any):any {
    itens.sort(
      (a,b) => a.data-b.data);
    if(filtro.projeto>=0){
      return itens.filter(item => item.projeto == filtro.projeto);
      
    }else if(filtro.dias>=0){
      let d = new Date((new Date()).getTime() + filtro.dias*24*60*60*1000);
      return itens.filter(item => item.data <=d)

    }else{
      return itens;
    }
  }
}

