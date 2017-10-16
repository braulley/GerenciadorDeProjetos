import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProjetosServiceProvider } from '../../providers/projetos-service/projetos-service';

/**
 * Generated class for the ProjetoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projeto',
  templateUrl: 'projeto.html',
})
export class ProjetoPage {

  codigoProjeto: number;
  nomeProjeto:string ="";
  novo: boolean;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public projetosService: ProjetosServiceProvider) {
      this.codigoProjeto = navParams.get('codigo');
      this.novo = navParams.get('novo');
      let projetos = projetosService.getProjetos();

      if(!this.novo) {
        for(let i=0; i<projetos.length;i++){
          if(projetos[i].codigo == this.codigoProjeto){
            this.nomeProjeto = projetos[i].nome;
            break;
          }
        }
      }else{
        this.codigoProjeto = 0;
        this.nomeProjeto = '';
      }

  }

  alterar(){
    this.projetosService.editProjetos(this.codigoProjeto,this.nomeProjeto);
    this.navCtrl.pop();
  }

  excluir(){
    this.projetosService.deleteProjetos(this.codigoProjeto,this.nomeProjeto);
    this.navCtrl.pop();
  }

  incluir(){
    this.projetosService.addProjeto(this.nomeProjeto);
    this.navCtrl.pop();
  }

}
