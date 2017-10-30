import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ProjetosServiceProvider } from '../../providers/projetos-service/projetos-service';
/*teste*/
@IonicPage()
@Component({
  selector: 'page-projeto',
  templateUrl: 'projeto.html',
})
export class ProjetoPage {

  codigoProjeto: number;
  nomeProjeto:string ="";
  novo: boolean;
  projetos:any = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public projetosService: ProjetosServiceProvider,
    public toastCtrl: ToastController) {
      this.codigoProjeto = navParams.get('codigo');
      this.novo = navParams.get('novo');

      if(!this.novo) {
        projetosService.getProjeto(this.codigoProjeto).then(dados => this.nomeProjeto = dados.projeto);
      }
      else{
        this.codigoProjeto = 0;
        this.nomeProjeto = '';
      }

  }

  presentToast(text: string): void {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000
    });
    toast.present();
  }

  alterar(){
    this.projetosService.editProjetos(this.codigoProjeto,this.nomeProjeto)
    .then(dados => {
      this.presentToast('Projeto alterado com sucesso!');
      this.navCtrl.pop();
    });
  }

  excluir(){
    this.projetosService.deleteProjetos(this.codigoProjeto)
    .then(dados => {
      this.navCtrl.pop();
    });
  }

  incluir(){
    this.projetosService.addProjeto(this.nomeProjeto)
    .then(dados =>{
      this.presentToast('Projeto adicionado com sucesso!');
      this.navCtrl.pop();
    });
  }

}
