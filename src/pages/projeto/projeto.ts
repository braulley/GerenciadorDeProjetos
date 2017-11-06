import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform } from 'ionic-angular';
import { ProjetosServiceProvider } from '../../providers/projetos-service/projetos-service';
import { Dialogs } from '@ionic-native/dialogs';

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
    public toastCtrl: ToastController,
    private dialogs: Dialogs,
    public platform: Platform) {
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
    this.platform.ready().then(()=> {
      this.dialogs.confirm('O projeto sera alterado?',
     'Alerta de Alteração',['Ok','Cancel'])
     .then((dados) => {
      if(dados === 1){
        this.projetosService.editProjetos(this.codigoProjeto,this.nomeProjeto)
        .then(dados => {
          this.presentToast('Projeto alterado com sucesso!');
          this.navCtrl.pop();
        });
      }
     })
     .catch( e => console.log('Error displaying dialog', e));
    });
    
  }

  excluir(){

    this.platform.ready().then(() => {
      this.dialogs.confirm('Deseja realmente excluir este projeto.',
     'Confirmação',['Ok','Cancel'] )
     .then((dados) => {
       if(dados === 1){
        this.projetosService.deleteProjetos(this.codigoProjeto)
        .then(dados => {
          this.navCtrl.pop();
        });
       }
    })
    .catch( e => console.log('Error displaying dialog', e));
    });     
  }

  incluir(){
    this.platform.ready().then(() => {
       this.dialogs.confirm('Deseja adiconar este projeto.',
      'Confirmação',['Ok','Cancel'] )
      .then((dados) => {
        if(dados === 1 ){
          this.projetosService.addProjeto(this.nomeProjeto)
          .then(dados =>{
            this.presentToast('Projeto adicionado com sucesso!');  
            //this.onConfirm();    
            this.navCtrl.pop();
          });
        }
      })// console.log('Dialog dismissed'))
      .catch( e => console.log('Error displaying dialog', e));
    });    
  }
}
