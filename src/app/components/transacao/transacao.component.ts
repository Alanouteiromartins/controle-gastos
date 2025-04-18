import { Component, OnInit } from '@angular/core';
import { Transacao } from '../../interfaces/transacao';
import { CommonModule } from '@angular/common';
import { TransacaoService } from '../../services/transacao.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MesService } from '../../services/mes.service';

@Component({
  selector: 'app-transacao',
  imports: [CommonModule, FormsModule],
  templateUrl: './transacao.component.html',
  styleUrl: './transacao.component.css'
})
export class TransacaoComponent implements OnInit {

  categoriaIcones: { [key: string]: { icon: string; cor: string } } = {
    'Lazer': { icon: 'fas fa-gamepad', cor: '#e67e22' },
    'Salário': { icon: 'fas fa-briefcase', cor: '#27ae60' },
    'Alimentação': { icon: 'fas fa-utensils', cor: '#c0392b' },
    'Transporte': { icon: 'fas fa-car', cor: '#2980b9' },
    'Moradia': { icon: 'fas fa-house', cor: '#2980b9' },
    'Educação': { icon: 'fas fa-book', cor: '#8e44ad' },
    'Saúde': { icon: 'fas fa-heartbeat', cor: '#e74c3c' },
    'Compras': { icon: 'fas fa-shopping-bag', cor: '#f39c12' },
    'Serviços': { icon: 'fas fa-tools', cor: '#7f8c8d' },
    'Impostos': { icon: 'fas fa-receipt', cor: '#d35400' },
    'Doações': { icon: 'fas fa-hands-helping', cor: '#16a085' },
    'Investimentos': { icon: 'fas fa-chart-line', cor: '#2ecc71' },
    'Pets': { icon: 'fas fa-paw', cor: '#d35400' },
    'Viagem': { icon: 'fas fa-plane', cor: '#3498db' }
  };

  tipoClasses: { [key: string]: string } = {
    'Receita': 'badge badge-receita',
    'Despesa': 'badge badge-despesa',
    'Fixo': 'badge badge-fixo',
    'Variável': 'badge badge-variavel'
  };

  transacoes: Transacao[] = [];
  receitasMes: Transacao[] = [];
  despesasMes: Transacao[] = [];
  categorias: string[] = Object.keys(this.categoriaIcones);
  tipos: string[] = Object.keys(this.tipoClasses);
  tipoSelecionado: string = '';
  categoriaSelecionada: string = '';
  mesAtual = new Date().getMonth() + 1;
  itensPorPagina = 10;
  paginaAtual = 1;
  meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  constructor(private transacaoService: TransacaoService, private mesService: MesService) { }

  ngOnInit(): void {
    this.getTransacoesMes();
    this.getReceitasMes();
    this.getDespesasMes();
  }

  atualizarTransacoes() {
    this.transacoes = [];
    this.receitasMes = [];
    this.despesasMes = [];
    this.getTransacoesMes();
    this.getReceitasMes();
    this.getDespesasMes();
    this.mesService.setMesAtual(this.mesAtual);
  }

  //busca as transacoes no service passando o mes
  getTransacoesMes() {
    this.transacaoService.getTransacoesMes(this.mesAtual).forEach((transacao) => {
      this.transacoes.push(transacao);
    });
  }

  //busca as transacoes que contem tipo de "Receita" no service passando o mes
  getReceitasMes() {
    this.transacaoService.getReceitasMes(this.mesAtual).forEach((transacao) => {
      this.receitasMes.push(transacao);
    })
  }

  //busca as transacoes que contem tipo de "Despesa" no service passando o mes
  getDespesasMes() {
    this.transacaoService.getDespesasMes(this.mesAtual).forEach((transacao) => {
      this.despesasMes.push(transacao);
    })
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
