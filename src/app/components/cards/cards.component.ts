import { Component, OnInit } from '@angular/core';
import { TransacaoService } from '../../services/transacao.service';
import { Transacao } from '../../interfaces/transacao';
import { CommonModule } from '@angular/common';
import { MesService } from '../../services/mes.service';

@Component({
  selector: 'app-cards',
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit {

  valorReceitaMes: number = 0;
  valorDespesaMes: number = 0;
  mesAtual = new Date().getMonth() + 1;
  saldoAtual: number = 0;

  constructor(private transacaoService: TransacaoService, private mesService: MesService) { }

  ngOnInit(): void {
    this.mesService.mesAtual$.subscribe((mes) => {
      this.mesAtual = mes;
      this.getValorReceitaMes();
      this.getDespesasMes();
      this.getSaldoAtual();
    })

  }

  getValorReceitaMes() {
    const transacoesMes = this.transacaoService.getTransacoesMes(this.mesAtual);
    // const transacoesMes = this.transacoes.filter((transacao) => transacao.data.getMonth() + 1 === this.mesAtual);

    const receitaTransacoes = transacoesMes.filter((transacao) => transacao.tipo.includes('Receita'));

    this.valorReceitaMes = receitaTransacoes.reduce((total, transacao) => total + transacao.valor, 0);
  }

  getDespesasMes() {
    const transacoesMes = this.transacaoService.getTransacoesMes(this.mesAtual);

    const despesaTransacoes = transacoesMes.filter((transacao) => transacao.tipo.includes('Despesa'));

    this.valorDespesaMes = despesaTransacoes.reduce((total, transacao) => total + transacao.valor, 0);
  }

  getSaldoAtual() {
    this.saldoAtual = this.valorReceitaMes - this.valorDespesaMes;
  }

}
