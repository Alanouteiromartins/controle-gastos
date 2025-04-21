import { Component, OnInit } from '@angular/core';
import { TransacaoService } from '../../services/transacao.service';
import { Transacao } from '../../interfaces/transacao';
import { CommonModule } from '@angular/common';
import { MesService } from '../../services/mes.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-cards',
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit {

  valorReceitaMes: number = 0;
  valorDespesaMes: number = 0;
  mesAtual = 0;
  saldoAtual: number = 0;

  constructor(private transacaoService: TransacaoService, private mesService: MesService) { }

  ngOnInit(): void {
    this.mesService.mesAtual$.subscribe((mes) => {
      this.mesAtual = mes;
      this.carregarDadosDoMes();
    })

  }

  carregarDadosDoMes() {
    forkJoin({
      receitas: this.transacaoService.getReceitasMes(this.mesAtual),
      despesas: this.transacaoService.getDespesasMes(this.mesAtual)
    }).subscribe(({ receitas, despesas }) => {
      this.valorReceitaMes = receitas.reduce((total, t) => total + t.valor, 0);
      this.valorDespesaMes = despesas.reduce((total, t) => total + t.valor, 0);
      this.getSaldoAtual();
    });
  }

  getValorReceitaMes() {
    this.transacaoService.getReceitasMes(this.mesAtual).subscribe((transacoesMes) =>{
      const receitaTransacoes = transacoesMes;
      this.valorReceitaMes = receitaTransacoes.reduce((total, transacao) => total + transacao.valor, 0);
    })
  }

  getDespesasMes() {
    this.transacaoService.getDespesasMes(this.mesAtual).subscribe((transacoes) =>{
      const despesaTransacoes = transacoes;
      this.valorDespesaMes = despesaTransacoes.reduce((total, transacao) => total + transacao.valor, 0);
    })
  }

  getSaldoAtual() {
    this.saldoAtual = this.valorReceitaMes - this.valorDespesaMes;
  }

}
