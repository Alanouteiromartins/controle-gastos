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
  saldoAnterior: number = 0;
  saldoAcumulado: number = 0;

  constructor(private transacaoService: TransacaoService, private mesService: MesService) { }

  ngOnInit(): void {
    this.mesService.mesAtual$.subscribe((mes) => {
      this.mesAtual = mes;
      this.carregarDadosDoMes();
    })

  }

  carregarDadosDoMes() {
    const mesAnterior = this.mesAtual === 1 ? 12 : this.mesAtual - 1;
  
    forkJoin({
      receitas: this.transacaoService.getReceitasMes(this.mesAtual),
      despesas: this.transacaoService.getDespesasMes(this.mesAtual),
      receitasAnteriores: this.transacaoService.getReceitasMes(mesAnterior),
      despesasAnteriores: this.transacaoService.getDespesasMes(mesAnterior)
    }).subscribe(({ receitas, despesas, receitasAnteriores, despesasAnteriores }) => {
      this.valorReceitaMes = receitas.reduce((total, t) => total + t.valor, 0);
      this.valorDespesaMes = despesas.reduce((total, t) => total + t.valor, 0);
      this.getSaldoAtual();
  
      const totalReceitaAnterior = receitasAnteriores.reduce((total, t) => total + t.valor, 0);
      const totalDespesaAnterior = despesasAnteriores.reduce((total, t) => total + t.valor, 0);
  
      this.saldoAnterior = totalReceitaAnterior - totalDespesaAnterior;
      this.saldoAcumulado = this.saldoAnterior + this.saldoAtual;
    });
  }

  getSaldoAtual() {
    this.saldoAtual = this.valorReceitaMes - this.valorDespesaMes;
  }

}
