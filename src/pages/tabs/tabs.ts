import { Component } from '@angular/core';

/*import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';*/
import { ProjetosPage } from '../projetos/projetos';
import { TarefasPage } from '../tarefas/tarefas';
import {UsuariosPage} from '../usuarios/usuarios';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

 
  tab1Root = ProjetosPage;
  tab2Root = TarefasPage;
  tab3Root = UsuariosPage;

  constructor() {

  }
}
