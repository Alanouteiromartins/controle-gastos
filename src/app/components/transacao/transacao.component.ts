import { Component, effect, OnInit } from '@angular/core';
import { Transacao } from '../../interfaces/transacao';
import { CommonModule } from '@angular/common';
import { TransacaoService } from '../../services/transacao.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MesService } from '../../services/mes.service';
import { AlertService } from '../../services/alerta.service';
import { CategoriaService } from '../../services/categoria.service';
import { ModalObservacaoComponent } from "../modal-observacao/modal-observacao.component";

@Component({
  selector: 'app-transacao',
  imports: [CommonModule, FormsModule, ModalObservacaoComponent],
  templateUrl: './transacao.component.html',
  styleUrl: './transacao.component.css'
})
export class TransacaoComponent implements OnInit {

  constructor(private transacaoService: TransacaoService, private mesService: MesService, private alertaService: AlertService, private categoriaService: CategoriaService) { 
    effect(() =>{
      const count = this.transacaoService.transacaoAdicionada();
      if(count > 0){
        this.atualizarTransacoes();
      }
    })
  }

  categoriaIcones: { [key: string]: { icon: string; cor: string } } = {};

  tipoClasses: { [key: string]: string } = {
    'Receita': 'badge badge-receita',
    'Despesa': 'badge badge-despesa',
    'Fixo': 'badge badge-fixo',
    'Variável': 'badge badge-variavel'
  };

  transacoes: Transacao[] = [];
  receitasMes: Transacao[] = [];
  despesasMes: Transacao[] = [];
  categorias: string[] = [];
  tipos: string[] = Object.keys(this.tipoClasses);
  tipoSelecionado: string = '';
  categoriaSelecionada: string = '';
  mesAtual = new Date().getMonth() + 1;
  itensPorPagina = 10;
  paginaAtual = 1;
  meses: string[] = [];
  observacaoTransacao: string = '';

  

  ngOnInit(): void {
    this.meses = this.mesService.getMeses();
    this.categorias = this.categoriaService.getTodasCategorias();
    this.categoriaIcones = this.categoriaService.getTodasComIcones();
    this.getTransacoesFiltradas();
    this.getReceitasMes();
    this.getDespesasMes();
  }

  atualizarTransacoes() {
    this.mesService.setMesAtual(this.mesAtual);
    this.transacoes = [];
    this.receitasMes = [];
    this.despesasMes = [];
    this.getTransacoesFiltradas();
    this.getReceitasMes();
    this.getDespesasMes();
  } 

  //busca as transacoes no filtro
  getTransacoesFiltradas(){
    this.transacaoService.getTransacoesFiltradas(this.categoriaSelecionada, this.mesAtual, this.tipoSelecionado).subscribe((transacoes)=>{
      this.transacoes = transacoes;
    })
  }

  //busca as transacoes que contem tipo de "Receita" no service passando o mes
  getReceitasMes() {
    this.transacaoService.getReceitasFiltradas(this.categoriaSelecionada, this.mesAtual, this.tipoSelecionado).subscribe((transacoes) => {
      this.receitasMes = transacoes;
    })
    
  }

  //busca as transacoes que contem tipo de "Despesa" no service passando o mes
  getDespesasMes() {
    this.transacaoService.getDespesasFiltradas(this.categoriaSelecionada, this.mesAtual, this.tipoSelecionado).subscribe((transacoes) =>{
      this.despesasMes = transacoes;
    })
  }

  deleteTransacao(transacao: Transacao) {
    if (!transacao._id) {
      return console.log('Nenhuma transação encontrada');
    }
    
    // Exibe o alerta de confirmação
    this.alertaService.confirm({
      title: 'Confirmar exclusão',
      message: 'Tem certeza que deseja excluir esta transação? Esta ação não pode ser desfeita.',
      confirmButtonText: 'Sim, excluir',
      cancelButtonText: 'Cancelar'
    }).then(confirmed => {
      // Só prossegue com a exclusão se o usuário confirmou
      if (confirmed && transacao._id) {
        this.transacaoService.deleteTransacao(transacao._id).subscribe(() => {
          this.alertaService.success('Transação removida com sucesso!');
        });
      }
    });
  }

  //pega a observacao ao clicar
  getObservacao(transacao: Transacao){
    if(!transacao.observacao){
      return
    }
    this.observacaoTransacao = transacao.observacao;
  }

  //busca quantas paginas serão necessárias na aba despesas
  get totalPaginasDespesas(): number {
    return Math.ceil(this.despesasMes.length / this.itensPorPagina);
  }

  //busca quantas paginas serão necessárias na aba receitas
  get totalPaginasReceitas(): number {
    return Math.ceil(this.receitasMes.length / this.itensPorPagina);
  }

  //busca quantas paginas serão necessárias na aba todas
  get totalPaginasTodas(): number {
    return Math.ceil(this.transacoes.length / this.itensPorPagina);
  }

  //cria um array apenas com as despesas da página atual
  get despesasPaginadas(): Transacao[] {
    const inicio = (this.paginaAtual - 1) * this.itensPorPagina;
    const fim = inicio + this.itensPorPagina;
    return this.despesasMes.slice(inicio, fim);
  }

  //cria um array apenas com as receitas da página atual
  get receitasPaginadas(): Transacao[] {
    const inicio = (this.paginaAtual - 1) * this.itensPorPagina;
    const fim = inicio + this.itensPorPagina;
    return this.receitasMes.slice(inicio, fim);
  }

  //cria um array apenas com todas as transacoes da página atual
  get transacoesPaginadas(): Transacao[] {
    const inicio = (this.paginaAtual - 1) * this.itensPorPagina;
    const fim = inicio + this.itensPorPagina;
    return this.transacoes.slice(inicio, fim);
  }

  //muda a pagina das despesas
  mudarPaginaDespesas(pagina: number) {
    if (pagina >= 1 && pagina <= this.totalPaginasDespesas) {
      this.paginaAtual = pagina;
    }
  }

  //muda a pagina das receitas
  mudarPaginaReceitas(pagina: number) {
    if (pagina >= 1 && pagina <= this.totalPaginasReceitas) {
      this.paginaAtual = pagina;
    }
  }

  //muda a pagina de todas as transacoes
  mudarPaginaTodas(pagina: number) {
    if (pagina >= 1 && pagina <= this.totalPaginasTodas) {
      this.paginaAtual = pagina;
    }
  }

  // reseta a pagina atual para 1 ao mudar de painel
  resetarPaginaAtual() {
    this.paginaAtual = 1;
  }

  //pega as paginas caso houver muitas - Receitas
  get paginasParaMostrarReceitas(): number[] {
    const total = this.totalPaginasReceitas;
    const atual = this.paginaAtual;
    const max = 2;

    let inicio = Math.max(atual - Math.floor(max / 2), 1);
    let fim = inicio + max - 1;

    if (fim > total) {
      fim = total;
      inicio = Math.max(fim - max + 1, 1);
    }

    const paginas: number[] = [];
    for (let i = inicio; i <= fim; i++) {
      paginas.push(i);
    }

    return paginas;
  }

  //pega as paginas caso houver muitas - despesas
  get paginasParaMostrarDespesas(): number[] {
    const total = this.totalPaginasDespesas;
    const atual = this.paginaAtual;
    const max = 2;

    let inicio = Math.max(atual - Math.floor(max / 2), 1);
    let fim = inicio + max - 1;

    if (fim > total) {
      fim = total;
      inicio = Math.max(fim - max + 1, 1);
    }

    const paginas: number[] = [];
    for (let i = inicio; i <= fim; i++) {
      paginas.push(i);
    }

    return paginas;
  }

  //pega as paginas caso houver muitas - Todas
  get paginasParaMostrarTodas(): number[] {
    const total = this.totalPaginasTodas;
    const atual = this.paginaAtual;
    const max = 2;

    let inicio = Math.max(atual - Math.floor(max / 2), 1);
    let fim = inicio + max - 1;

    if (fim > total) {
      fim = total;
      inicio = Math.max(fim - max + 1, 1);
    }

    const paginas: number[] = [];
    for (let i = inicio; i <= fim; i++) {
      paginas.push(i);
    }

    return paginas;
  }
}
