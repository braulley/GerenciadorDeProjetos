import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { ProjetosPage } from '../pages/projetos/projetos';
import { ProjetoPage } from '../pages/projeto/projeto';
import { TarefasPage, Filtro } from '../pages/tarefas/tarefas';
import { TarefaPage } from '../pages/tarefa/tarefa';

/*import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';*/
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProjetosServiceProvider } from '../providers/projetos-service/projetos-service';
import { TarefasServiceProvider } from '../providers/tarefas-service/tarefas-service';

@NgModule({
  declarations: [
    MyApp,
    ProjetosPage,
    ProjetoPage,
    TarefasPage,
    TarefaPage,
    TabsPage,
    Filtro
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProjetosPage,
    ProjetoPage,
    TarefasPage,
    TarefaPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProjetosServiceProvider,
    TarefasServiceProvider
  ]
})
export class AppModule {}
