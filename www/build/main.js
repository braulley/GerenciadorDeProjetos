webpackJsonp([4],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjetoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_projetos_service_projetos_service__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ProjetoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProjetoPage = (function () {
    function ProjetoPage(navCtrl, navParams, projetosService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.projetosService = projetosService;
        this.nomeProjeto = "";
        this.codigoProjeto = navParams.get('codigo');
        this.novo = navParams.get('novo');
        var projetos = projetosService.getProjetos();
        if (!this.novo) {
        }
        for (var i = 0; i < projetos.length; i++) {
            if (projetos[i].codigo == this.codigoProjeto) {
                this.nomeProjeto = projetos[i].nome;
                console.log(this.nomeProjeto);
                break;
            }
        }
    }
    ProjetoPage.prototype.alterar = function () {
        this.projetosService.editProjetos(this.codigoProjeto, this.nomeProjeto);
        this.navCtrl.pop();
    };
    ProjetoPage.prototype.excluir = function () {
        this.projetosService.deleteProjetos(this.codigoProjeto, this.nomeProjeto);
        this.navCtrl.pop();
    };
    ProjetoPage.prototype.incluir = function () {
        this.projetosService.addProjeto(this.nomeProjeto);
        this.navCtrl.pop();
    };
    return ProjetoPage;
}());
ProjetoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-projeto',template:/*ion-inline-start:"/home/braulley/Documentos/Angular/tesi/todolist/src/pages/projeto/projeto.html"*/'<!--\n  Generated template for the ProjetoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Projeto</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n      <ion-item>\n      <ion-label color="primary">Nome:</ion-label>\n      <ion-input type="text" placeholder="Nome do Projeto" [(ngModel)]="nomeProjeto"\n      required #nome="ngModel" ></ion-input>\n    </ion-item>\n    </ion-list>\n    <ion-card class="alerta" *ngIf="!nome.valid && nome.dirty">\n      <ion-card-content>\n        O nome do Projeto não pode ficar em branco.\n      </ion-card-content>\n    </ion-card>\n\n\n    <button ion-button round color="primary" (click)="incluir()"\n    [disabled]="!nome.valid" [class.invisivel]="!novo">\n      <ion-icon name="checkmark"></ion-icon>\n    </button>\n\n    <button ion-button round color="primary" (click)="alterar()"\n    [disabled]="!nome.valid">\n      <ion-icon name="checkmark"></ion-icon>\n    </button>\n\n    <button ion-button round color="danger" (click)="excluir()" \n    [disabled]="!nome.valid">\n        <ion-icon name="trash"></ion-icon>\n    </button>\n\n</ion-content>\n'/*ion-inline-end:"/home/braulley/Documentos/Angular/tesi/todolist/src/pages/projeto/projeto.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_projetos_service_projetos_service__["a" /* ProjetosServiceProvider */]])
], ProjetoPage);

//# sourceMappingURL=projeto.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjetosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_projetos_service_projetos_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__projeto_projeto__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProjetosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProjetosPage = (function () {
    function ProjetosPage(navCtrl, navParams, projetosService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.projetosService = projetosService;
        this.projetos = projetosService.getProjetos();
    }
    ProjetosPage.prototype.selecionaProjeto = function (c) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__projeto_projeto__["a" /* ProjetoPage */], { codigo: c, novo: false });
    };
    ProjetosPage.prototype.novoProjeto = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__projeto_projeto__["a" /* ProjetoPage */], { codigo: 0, novo: true });
    };
    return ProjetosPage;
}());
ProjetosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-projetos',template:/*ion-inline-start:"/home/braulley/Documentos/Angular/tesi/todolist/src/pages/projetos/projetos.html"*/'<!--\n  Generated template for the ProjetosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Projetos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item *ngFor="let p of projetos" (click)="selecionaProjeto(p.codigo)">\n      {{ p.nome }}\n    </button>  \n  </ion-list>\n  <div>\n    <button id="mais" ion-button round color="primary" (click)="novoProjeto()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/braulley/Documentos/Angular/tesi/todolist/src/pages/projetos/projetos.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_projetos_service_projetos_service__["a" /* ProjetosServiceProvider */]])
], ProjetosPage);

//# sourceMappingURL=projetos.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TarefaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tarefas_service_tarefas_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_projetos_service_projetos_service__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TarefaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TarefaPage = (function () {
    function TarefaPage(navCtrl, navParams, tarefasService, projetosService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tarefasService = tarefasService;
        this.projetosService = projetosService;
        this.projetos = projetosService.getProjetos();
        this.novo = navParams.get('novo');
        this.codigoTarefa = navParams.get('codigo');
        var tarefas = tarefasService.getTarefas();
        if (!this.novo) {
            for (var i = 0; i < tarefas.length; i++) {
                if (tarefas[i].codigo == this.codigoTarefa) {
                    this.codigoProjeto = tarefas[i].projeto;
                    this.descricao = tarefas[i].descricao;
                    this.prioridade = tarefas[i].prioridade;
                    var d = new Date();
                    this.data = d.getFullYear() + "_" +
                        ("0" + (d.getMonth() + 1)).substr(-2, 2) + "_" +
                        ("0" + d.getDate()).substr(-2, 2);
                }
            }
        }
        else {
            this.codigoProjeto = this.projetos[0].codigo;
            this.descricao = '';
            this.prioridade = 3;
            var d = new Date();
            this.data = d.getFullYear() + "_" +
                ("0" + (d.getMonth() + 1)).substr(-2, 2) + "_" +
                ("0" + d.getDate()).substr(-2, 2);
        }
    }
    TarefaPage.prototype.alterar = function () {
        var d = new Date(parseInt(this.data.substr(0, 4)), parseInt(this.data.substr(0, 4)), parseInt(this.data.substr(8, 2)));
        this.tarefasService.editTarefas(this.codigoTarefa, this.codigoProjeto, this.descricao, d, this.prioridade);
        this.navCtrl.pop();
    };
    TarefaPage.prototype.apagar = function () {
        this.tarefasService.deleteTarefas(this.codigoTarefa);
        this.navCtrl.pop();
    };
    TarefaPage.prototype.incluir = function () {
        var d = new Date(parseInt(this.data.substr(0, 4)), parseInt(this.data.substr(0, 4)), parseInt(this.data.substr(8, 2)));
        this.tarefasService.addTarefas(this.codigoProjeto, this.descricao, d, this.prioridade);
        this.navCtrl.pop();
    };
    return TarefaPage;
}());
TarefaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tarefa',template:/*ion-inline-start:"/home/braulley/Documentos/Angular/tesi/todolist/src/pages/tarefa/tarefa.html"*/'<!--\n  Generated template for the TarefaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Tarefa</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n  \n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label color="primary">Descrição</ion-label>\n      <ion-input placeholder="Descrição da tarefa" [(ngModel)]="descricao" \n      required name="descricao" #cd="ngModel"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary">Projeto</ion-label>\n      <ion-select [(ngModel)]="codigoProjeto">\n        <ion-option *ngFor="let p of projetos" value="{{p.codigo}}">\n          {{p.nome}}\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary">Data</ion-label>\n      <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="data"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary">Prioridade</ion-label>\n      <ion-select [(ngModel)]="prioridade" >\n        <ion-option value="1">1 - Alta</ion-option>\n        <ion-option value="2">2 - Média</ion-option>\n        <ion-option value="3">3 - Baixa</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n\n  <ion-card *ngIf="!cd.valid && cd.dirty" class="alerta">\n    <ion-card-content>A descrição da tarefa é obrigatória</ion-card-content>\n  </ion-card>\n  <div class="mais">\n    <button ion-button round color="danger" (click)="apagar()"\n    [class.invisivel]="novo"><ion-icon name="trash"></ion-icon>\n    </button>\n\n    <button ion-button round color="primary" (click)="alterar()"\n    [class.invisivel]="novo" [disabled]="!cd.valid"><ion-icon name="checkmark"></ion-icon>\n    </button>\n\n    <button ion-button round color="primary" (click)="incluir()"\n    [class.invisivel]="!novo"><ion-icon name="checkmark"></ion-icon>\n    </button>\n  \n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/braulley/Documentos/Angular/tesi/todolist/src/pages/tarefa/tarefa.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_tarefas_service_tarefas_service__["a" /* TarefasServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_tarefas_service_tarefas_service__["a" /* TarefasServiceProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_projetos_service_projetos_service__["a" /* ProjetosServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_projetos_service_projetos_service__["a" /* ProjetosServiceProvider */]) === "function" && _d || Object])
], TarefaPage);

var _a, _b, _c, _d;
//# sourceMappingURL=tarefa.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TarefasPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Filtro; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tarefas_service_tarefas_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_projetos_service_projetos_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tarefa_tarefa__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TarefasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TarefasPage = (function () {
    function TarefasPage(navCtrl, navParams, menuCtrl, tarefasService, projetosService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.tarefasService = tarefasService;
        this.projetosService = projetosService;
        this.filtroTarefas = {};
        this.projetos = projetosService.getProjetos();
        this.tarefas = tarefasService.getTarefas();
    }
    TarefasPage.prototype.nomeProjeto = function (c) {
        for (var i = 0; i < this.projetos.length; i++) {
            if (this.projetos[i].codigo == c)
                return this.projetos[i].nome;
            return "Projeto não encontrado.";
        }
    };
    TarefasPage.prototype.selecionaTarefa = function (c) {
        var t = parseInt(c);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tarefa_tarefa__["a" /* TarefaPage */], { codigo: t, novo: false });
    };
    TarefasPage.prototype.incluir = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tarefa_tarefa__["a" /* TarefaPage */], { codigo: 0, novo: true });
    };
    TarefasPage.prototype.limparFiltros = function () {
        this.filtroTarefas = {};
        this.menuCtrl.close();
    };
    TarefasPage.prototype.filtroProjeto = function (c) {
        this.filtroTarefas = { projeto: c };
        this.menuCtrl.close();
    };
    TarefasPage.prototype.filtroDias = function (d) {
        this.filtroTarefas = { dias: d };
        this.menuCtrl.close();
    };
    return TarefasPage;
}());
TarefasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tarefas',template:/*ion-inline-start:"/home/braulley/Documentos/Angular/tesi/todolist/src/pages/tarefas/tarefas.html"*/'<!--\n  Generated template for the TarefasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Tarefas</ion-title>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-menu [content]="menucontent">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Filtros</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <button ion-item (click)="limparFiltros()">Todas</button>\n        <button ion-item (click)="filtroDias(0)">Até Hoje</button>\n        <button ion-item (click)="filtroDias(1)">Até Amanhã</button>\n        <button ion-item (click)="filtroDias(7)">Até a próxima semana</button>\n        <ion-item-divider class="light">POR PROJETO</ion-item-divider>\n        <button ion-item *ngFor="let p of projetos" (click)="filtroProjeto(p.codigo)">{{p.nome}}</button>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n  <ion-nav id="nav" #menucontent [root]="rootPage"></ion-nav>\n\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item *ngFor="let t of tarefas | filtro: filtroTarefas" (click)="selecionaTarefa(t.codigo)">\n      <h2>{{t.descricao | uppercase}}</h2>\n      <h3>{{nomeProjeto(t.projeto)}} ({{t.projeto}})</h3>\n      <p>{{t.data | date:\'dd/MM/yyyy\' }}</p>\n      <ion-badge item-right\n      [class.alta]="t.prioridade==1"\n      [class.media]="t.prioridade==2"\n      [class.baixa]="t.prioridade==3">\n      {{t.prioridade}}\n    </ion-badge>\n    </button>\n  </ion-list>\n\n\n  <button ion-button round color="primary" (click)="incluir()">\n    <ion-icon name="add"></ion-icon>\n  </button>\n</ion-content>\n'/*ion-inline-end:"/home/braulley/Documentos/Angular/tesi/todolist/src/pages/tarefas/tarefas.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_tarefas_service_tarefas_service__["a" /* TarefasServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_tarefas_service_tarefas_service__["a" /* TarefasServiceProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_projetos_service_projetos_service__["a" /* ProjetosServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_projetos_service_projetos_service__["a" /* ProjetosServiceProvider */]) === "function" && _e || Object])
], TarefasPage);

var Filtro = (function () {
    function Filtro() {
    }
    Filtro.prototype.transform = function (itens, filtro) {
        itens.sort(function (a, b) { return a.data - b.data; });
        if (filtro.projeto >= 0) {
            return itens.filter(function (item) { return item.projeto == filtro.projeto; });
        }
        else if (filtro.dias >= 0) {
            var d_1 = ((new Date()).getTime() + filtro.dias * 24 * 60 * 60 * 1000);
            return itens.filter(function (item) { return item.data <= d_1; });
        }
        else {
            return itens;
        }
    };
    return Filtro;
}());
Filtro = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'filtro'
    })
], Filtro);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=tarefas.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/projeto/projeto.module": [
		269,
		3
	],
	"../pages/projetos/projetos.module": [
		270,
		2
	],
	"../pages/tarefa/tarefa.module": [
		271,
		1
	],
	"../pages/tarefas/tarefas.module": [
		272,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__projetos_projetos__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tarefas_tarefas__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';*/


var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__projetos_projetos__["a" /* ProjetosPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__tarefas_tarefas__["b" /* TarefasPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/braulley/Documentos/Angular/tesi/todolist/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Projetos" tabIcon="folder"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Tarefas" tabIcon="list"></ion-tab>  \n</ion-tabs>\n'/*ion-inline-end:"/home/braulley/Documentos/Angular/tesi/todolist/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_projetos_projetos__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_projeto_projeto__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tarefas_tarefas__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tarefa_tarefa__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_projetos_service_projetos_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_tarefas_service_tarefas_service__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









/*import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';*/





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_projetos_projetos__["a" /* ProjetosPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_projeto_projeto__["a" /* ProjetoPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tarefas_tarefas__["b" /* TarefasPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tarefa_tarefa__["a" /* TarefaPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tarefas_tarefas__["a" /* Filtro */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/projeto/projeto.module#ProjetoPageModule', name: 'ProjetoPage', segment: 'projeto', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/projetos/projetos.module#ProjetosPageModule', name: 'ProjetosPage', segment: 'projetos', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tarefa/tarefa.module#TarefaPageModule', name: 'TarefaPage', segment: 'tarefa', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tarefas/tarefas.module#TarefasPageModule', name: 'TarefasPage', segment: 'tarefas', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_projetos_projetos__["a" /* ProjetosPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_projeto_projeto__["a" /* ProjetoPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tarefas_tarefas__["b" /* TarefasPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tarefa_tarefa__["a" /* TarefaPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_12__providers_projetos_service_projetos_service__["a" /* ProjetosServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_13__providers_tarefas_service_tarefas_service__["a" /* TarefasServiceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/braulley/Documentos/Angular/tesi/todolist/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/braulley/Documentos/Angular/tesi/todolist/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjetosServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ProjetosServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProjetosServiceProvider = (function () {
    function ProjetosServiceProvider(http) {
        this.http = http;
        this.projetos = [
            { codigo: 1, nome: 'Algoritmos' },
            { codigo: 2, nome: 'Arquitetura de Computadores' },
            { codigo: 3, nome: 'EAD' },
            { codigo: 4, nome: 'Modelagem de Processos' },
            { codigo: 5, nome: 'Segurança da Informação' },
            { codigo: 6, nome: 'ATP' },
            { codigo: 7, nome: 'POO' }
        ];
        this.ultimoCodigo = 7;
        console.log('Hello ProjetosServiceProvider Provider');
    }
    ProjetosServiceProvider.prototype.getProjetos = function () {
        return this.projetos;
    };
    ProjetosServiceProvider.prototype.addProjeto = function (n) {
        this.ultimoCodigo++;
        this.projetos.push({ codigo: this.ultimoCodigo, nome: n });
    };
    ProjetosServiceProvider.prototype.editProjetos = function (c, n) {
        for (var i = 0; i < this.projetos.length; i++) {
            if (this.projetos[i].codigo == c) {
                this.projetos[i].nome = n;
            }
        }
    };
    ProjetosServiceProvider.prototype.deleteProjetos = function (c, n) {
        for (var i = 0; i < this.projetos.length; i++) {
            if (this.projetos[i].codigo == c) {
                this.projetos.splice(i, 1);
                break;
            }
        }
    };
    return ProjetosServiceProvider;
}());
ProjetosServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ProjetosServiceProvider);

//# sourceMappingURL=projetos-service.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TarefasServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the TarefasServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TarefasServiceProvider = (function () {
    function TarefasServiceProvider(http) {
        this.http = http;
        this.tarefas = [
            { codigo: 1, projeto: 1, descricao: 'Elaborar primeira prova', data: new Date(2017, 2, 29), prioridade: 1 },
            { codigo: 2, projeto: 1, descricao: 'Fechar o diário', data: new Date(2017, 5, 17), prioridade: 2 },
            { codigo: 3, projeto: 2, descricao: 'Gravar vídeo de apresentação', data: new Date(2017, 2, 10), prioridade: 1 },
            { codigo: 4, projeto: 3, descricao: 'Planejar campanhas', data: new Date(2017, 3, 2), prioridade: 3 }
        ];
        this.ultimoCodigo = 4;
        console.log('Hello TarefasServiceProvider Provider');
    }
    TarefasServiceProvider.prototype.getTarefas = function () {
        return this.tarefas;
    };
    TarefasServiceProvider.prototype.editTarefas = function (c, p, d, dt, pr) {
        for (var i = 0; i < this.tarefas.length; i++) {
            if (this.tarefas[i].codigo == c) {
                this.tarefas[i].projeto = p;
                this.tarefas[i].descricao = d;
                this.tarefas[i].data = dt;
                this.tarefas[i].prioridade = pr;
            }
        }
    };
    TarefasServiceProvider.prototype.addTarefas = function (p, d, dt, pr) {
        this.ultimoCodigo++;
        this.tarefas.push({ codigo: this.ultimoCodigo, projeto: p, descricao: d, data: dt, prioridade: pr });
    };
    TarefasServiceProvider.prototype.deleteTarefas = function (c) {
        for (var i = 0; i < this.tarefas.length; i++) {
            if (this.tarefas[i].codigo == c) {
                this.tarefas.splice(i, 1);
            }
        }
    };
    return TarefasServiceProvider;
}());
TarefasServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], TarefasServiceProvider);

//# sourceMappingURL=tarefas-service.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map