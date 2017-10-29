import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProjetosServiceProvider } from '../../providers/projetos-service/projetos-service';
import {ProjetoPage} from '../projeto/projeto';



/**
 * Generated class for the ProjetosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projetos',
  templateUrl: 'projetos.html',
})
export class ProjetosPage {

  projetos: any[] = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public projetosService: ProjetosServiceProvider) {

  }

  ionViewDidEnter(){
    this.projetosService.getProjetos().then(dados => {
      this.projetos = dados;
    });
  }

  selecionaProjeto(c:number){
    this.navCtrl.push(ProjetoPage, { codigo: c,novo:false });
  }

  novoProjeto(){
    this.navCtrl.push(ProjetoPage, { codigo: 0, novo: true });
  }

}
