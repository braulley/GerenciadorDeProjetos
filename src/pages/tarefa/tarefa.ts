import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {TarefasServiceProvider} from '../../providers/tarefas-service/tarefas-service';
import {ProjetosServiceProvider} from  '../../providers/projetos-service/projetos-service';

@IonicPage()
@Component({
  selector: 'page-tarefa',
  templateUrl: 'tarefa.html',
})
export class TarefaPage {

  //tarefas: any[];

  rootPage:null;
  projetos: any[];
  novo:boolean;
  codigoTarefa: number;
  codigoProjeto: number;
  descricao: string;
  prioridade: number;
  data: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public tarefasService: TarefasServiceProvider,
    public projetosService: ProjetosServiceProvider,
    public toastCtrl: ToastController) {
 
      this.projetos = projetosService.getProjetos();
      this.novo = navParams.get('novo');
      this.codigoTarefa = navParams.get('codigo');
      let tarefas = tarefasService.getTarefas();

      if(!this.novo){
        for(let i=0;i<tarefas.length;i++){
          if(tarefas[i].codigo == this.codigoTarefa){
            this.codigoProjeto = tarefas[i].projeto;
            this.descricao = tarefas[i].descricao;
            this.prioridade = tarefas[i].prioridade;
            let d = tarefas[i].data;
            this.data = d.getFullYear()+"-"+
                        ("0"+(d.getMonth()+1)).substr(-2,2)+"-"+
                        ("0"+d.getDate()).substr(-2,2);
          }
        }
      }else{
        this.codigoProjeto = this.projetos[0].codigo;
        this.descricao = '';
        this.prioridade = 3;
        let d = new Date();
        this.data = d.getFullYear()+"-"+
                    ("0"+(d.getMonth()+1)).substr(-2,2)+"-"+
                    ("0"+d.getDate()).substr(-2,2);
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
      let d = new Date(parseInt(this.data.substr(0,4)),
      parseInt(this.data.substr(0,4)),
      parseInt(this.data.substr(8,2)));
      this.tarefasService.editTarefas(this.codigoTarefa,
        this.codigoProjeto,
        this.descricao,
        d,
        this.prioridade
      );
      this.presentToast('Tarefa alterada com sucesso!');
      this.navCtrl.pop();
    }
  
    apagar(){
      this.tarefasService.deleteTarefas(this.codigoTarefa);
      this.navCtrl.pop();
    }
  
    incluir(){
      let d = new Date(parseInt(this.data.substr(0,4)),
      parseInt(this.data.substr(0,4)),
      parseInt(this.data.substr(8,2)));
      this.tarefasService.addTarefas(
        this.codigoProjeto,
        this.descricao,
        d,
        this.prioridade
      );
      this.presentToast('Tarefa adicionada com sucesso!');
      this.navCtrl.pop();
    }
}

