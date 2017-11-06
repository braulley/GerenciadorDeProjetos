import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform } from 'ionic-angular';
import {UsuarioServiceProvider} from '../../providers/usuario-service/usuario-service';
import {TarefasServiceProvider} from '../../providers/tarefas-service/tarefas-service';
import { Dialogs } from '@ionic-native/dialogs';

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
  public toastCtrl: ToastController,
  private dialogs: Dialogs ,
  private platform: Platform) {
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
    this.platform.ready().then(() => {
      this.dialogs.confirm('Deseja incluir o usuario','Confirm',
    ['Ok','Cancel'])
    .then( (dados) => {
      if(dados === 1){
        this.usuarioService.addUsuarios(this.nomeUsuario,this.codigoTarefa,this.observacaoUsuario);
        this.presentToast('Usuario adicionado com sucesso!');
        this.navCtrl.pop();
      }
    });
    });   
  }

  editar(){
    this.platform.ready().then(() => {
      this.dialogs.confirm('Alteração Detectada','Modificação',['Ok','Cancel'])
      .then((dados) => {
        if(dados === 1){
          this.usuarioService.editUsuarios(this.codigoUsuario,this.nomeUsuario,this.codigoTarefa,this.observacaoUsuario);
          this.presentToast('Usuario alterado com sucesso!');
          this.navCtrl.pop();
        }
      });    
    });    
  }

  apagar(){
    this.platform.ready().then(() => {
      this.dialogs.beep(5);
      this.usuarioService.deleteUsuarios(this.codigoUsuario);
      this.navCtrl.pop();
    });    
  }

  /*tirarFoto(){
    //Testa se a aplicação esta sendo executado em um dispositivo
    this.platform.ready().then(()=> {
    
      //Definição das configurações
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE      
      }

      this.camera.getPicture(options).then((imageData) => {

        //imageData é uma string codificada base64 ou um URI de arquivo
        this.imagem = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
        //Handler error
      });

    });
  }*/

}
