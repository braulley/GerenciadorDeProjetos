import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {UsuarioServiceProvider} from '../../providers/usuario-service/usuario-service';
import {TarefasServiceProvider} from '../../providers/tarefas-service/tarefas-service';

@IonicPage()
@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html',
})
export class UsuarioPage {


  nomeUsuario: string;
  codigoTarefa:number;
  novo:boolean;
  usuarios:any;
  codigoUsuario:number;
  tarefas:any[] = [];
  observacaoUsuario:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public usuarioService: UsuarioServiceProvider,
  public tarefasService: TarefasServiceProvider,
  public toastCtrl: ToastController) {
    this.codigoUsuario = this.navParams.get('codigo');
    this.novo = this.navParams.get('novo');
    this.usuarios = usuarioService.getUsuarios();

    if(!this.novo){
      for(let i=0; i< this.usuarios.length; i++){
        if(this.usuarios[i].codigo == this.codigoUsuario){
          this.nomeUsuario = this.usuarios[i].nome;
          this.codigoTarefa = this.usuarios[i].tarefa;
          this.observacaoUsuario = this.usuarios[i].observacao;
          break;
        }
      }
    }
    else{
      this.codigoUsuario =0;
      this.nomeUsuario = '';
      this.codigoTarefa = 0;
      this.observacaoUsuario = '';
    }

  }

  ionViewDidEnter(){
    this.tarefasService.getTarefas().then(dados =>
      this.tarefas = dados  
    );
  }

  presentToast(text: string): void {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000
    });
    toast.present();
  }

  incluir(){
    this.usuarioService.addUsuarios(this.nomeUsuario,this.codigoTarefa,this.observacaoUsuario);
    this.presentToast('Usuario adicionado com sucesso!');
    this.navCtrl.pop();
  }

  editar(){
    this.usuarioService.editUsuarios(this.codigoUsuario,this.nomeUsuario,this.codigoTarefa,this.observacaoUsuario);
    this.presentToast('Usuario alterado com sucesso!');
    this.navCtrl.pop();
  }

  apagar(){
    this.usuarioService.deleteUsuarios(this.codigoUsuario);
    this.navCtrl.pop();
  }

}
