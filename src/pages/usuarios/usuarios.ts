import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import {TarefasServiceProvider} from '../../providers/tarefas-service/tarefas-service';
import {UsuarioServiceProvider} from '../../providers/usuario-service/usuario-service';
import {UsuarioPage } from '../usuario/usuario';

/**
 * Generated class for the UsuariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usuarios',
  templateUrl: 'usuarios.html',
})
export class UsuariosPage {

  usuarios: any[] = [];
  tarefas: any[] = [];
  novo:boolean;
  imagem: string = ''; //Variavel que representara a imagem
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public usuariosService: UsuarioServiceProvider,
    public tarefasService: TarefasServiceProvider) {

      this.usuarios = usuariosService.getUsuarios();
  }

  ionViewDidEnter(){
    this.tarefasService.getTarefas().then( dados => 
      this.tarefas = dados
    );
  }

  selecionaUsuario(c) {
    this.navCtrl.push(UsuarioPage,{codigo: c,novo: false});
  }

  incluirUsuario(){
    this.navCtrl.push(UsuarioPage, {codigo:0, novo:true});
  }

  nomeTarefas(c:number):string{
    for(let i=0;i<this.tarefas.length;i++){
      if(this.tarefas[i].codigo == c)
        return this.tarefas[i].descricao;
    }
    return 'Nome de tarefa não encontrado.';
  }
  
  dataTarefa(d:number): Date{
    for(let j=0;j<this.tarefas.length;j++){
      if(this.tarefas[j].codigo == d){
        return this.tarefas[j].data;
      }
    }
  }

}
