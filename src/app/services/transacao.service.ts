import { Injectable } from '@angular/core';
import { Transacao } from '../interfaces/transacao';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {

  constructor() { }

  transacoes: Transacao[] = [{
    data: new Date(),
    descricao: 'Tenis',
    categoria: 'Lazer',
    tipo: ['Despesa', 'Variável'],
    valor: 350
  },
  {
    data: new Date(),
    descricao: 'Salário Mensal Tiffani',
    categoria: 'Salário',
    tipo: ['Receita', 'Fixo'],
    valor: 2500
  },
  {
    data: new Date(),
    descricao: 'Aluguel',
    categoria: 'Moradia',
    tipo: ['Receita', 'Fixo'],
    valor: 3000
  },
  {
    data: new Date(),
    descricao: 'Salário Mensal Tiffani',
    categoria: 'Salário',
    tipo: ['Receita', 'Fixo'],
    valor: 2500
  },
  {
    data: new Date(),
    descricao: 'Aluguel',
    categoria: 'Moradia',
    tipo: ['Receita', 'Fixo'],
    valor: 3000
  },
  {
    data: new Date(),
    descricao: 'Salário Mensal Tiffani',
    categoria: 'Salário',
    tipo: ['Receita', 'Fixo'],
    valor: 2500
  },
  {
    data: new Date(),
    descricao: 'Aluguel',
    categoria: 'Moradia',
    tipo: ['Receita', 'Fixo'],
    valor: 3000
  },
  {
    data: new Date(),
    descricao: 'Aluguel',
    categoria: 'Moradia',
    tipo: ['Receita', 'Fixo'],
    valor: 3000
  },
  {
    data: new Date(),
    descricao: 'Salário Mensal Tiffani',
    categoria: 'Salário',
    tipo: ['Receita', 'Fixo'],
    valor: 2500
  },
  {
    data: new Date(),
    descricao: 'Aluguel',
    categoria: 'Moradia',
    tipo: ['Receita', 'Fixo'],
    valor: 3000
  },
  {
    data: new Date(),
    descricao: 'Aluguel',
    categoria: 'Moradia',
    tipo: ['Receita', 'Fixo'],
    valor: 3000
  },
  {
    data: new Date(),
    descricao: 'Salário Mensal Tiffani',
    categoria: 'Salário',
    tipo: ['Receita', 'Fixo'],
    valor: 2500
  },
  {
    data: new Date(),
    descricao: 'Aluguel',
    categoria: 'Moradia',
    tipo: ['Receita', 'Fixo'],
    valor: 3000
  },
  {
    data: new Date(),
    descricao: 'Aluguel',
    categoria: 'Moradia',
    tipo: ['Receita', 'Fixo'],
    valor: 3000
  },
  {
    data: new Date(),
    descricao: 'Salário Mensal Tiffani',
    categoria: 'Salário',
    tipo: ['Receita', 'Fixo'],
    valor: 2500
  },
  {
    data: new Date(),
    descricao: 'Aluguel',
    categoria: 'Moradia',
    tipo: ['Receita', 'Fixo'],
    valor: 3000
  },
  {
    data: new Date(),
    descricao: 'Salário Mensal Tiffani',
    categoria: 'Salário',
    tipo: ['Receita', 'Fixo'],
    valor: 2500
  },
  {
    data: new Date(),
    descricao: 'Aluguel',
    categoria: 'Moradia',
    tipo: ['Receita', 'Fixo'],
    valor: 3000
  },
  {
    data: new Date(),
    descricao: 'Salário Mensal Tiffani',
    categoria: 'Salário',
    tipo: ['Receita', 'Fixo'],
    valor: 2500
  },
  {
    data: new Date(),
    descricao: 'Aluguel',
    categoria: 'Moradia',
    tipo: ['Receita', 'Fixo'],
    valor: 3000
  },
  {
    data: new Date(),
    descricao: 'Mesa para o escritório',
    categoria: 'Moradia',
    tipo: ['Despesa', 'Variável'],
    valor: 7000
  },
  {
    data: new Date(),
    descricao: 'Luz',
    categoria: 'Moradia',
    tipo: ['Despesa', 'Fixo'],
    valor: 371.90
  },
  {
    data: new Date(),
    descricao: 'Agua',
    categoria: 'Moradia',
    tipo: ['Despesa', 'Fixo'],
    valor: 101.00
  },
  {
    data: new Date(),
    descricao: 'Aluguel',
    categoria: 'Moradia',
    tipo: ['Receita', 'Fixo'],
    valor: 3000
  },
  {
    data: new Date(),
    descricao: 'Mesa para o escritório',
    categoria: 'Moradia',
    tipo: ['Despesa', 'Variável'],
    valor: 7000
  },
  {
    data: new Date(),
    descricao: 'Luz',
    categoria: 'Moradia',
    tipo: ['Despesa', 'Fixo'],
    valor: 371.90
  },
  {
    data: new Date(),
    descricao: 'Agua',
    categoria: 'Moradia',
    tipo: ['Despesa', 'Fixo'],
    valor: 101.00
  },
  {
    data: new Date(),
    descricao: 'Aluguel',
    categoria: 'Moradia',
    tipo: ['Receita', 'Fixo'],
    valor: 3000
  },
  {
    data: new Date(),
    descricao: 'Mesa para o escritório',
    categoria: 'Moradia',
    tipo: ['Despesa', 'Variável'],
    valor: 7000
  },
  {
    data: new Date(),
    descricao: 'Aluguel',
    categoria: 'Moradia',
    tipo: ['Receita', 'Fixo'],
    valor: 3000
  },
  {
    data: new Date(),
    descricao: 'Mesa para o escritório',
    categoria: 'Moradia',
    tipo: ['Despesa', 'Variável'],
    valor: 7000
  },
  {
    data: new Date(),
    descricao: 'Luz',
    categoria: 'Moradia',
    tipo: ['Despesa', 'Fixo'],
    valor: 371.90
  },
  {
    data: new Date(),
    descricao: 'Agua',
    categoria: 'Moradia',
    tipo: ['Despesa', 'Fixo'],
    valor: 101.00
  },
  {
    data: new Date(),
    descricao: 'Luz',
    categoria: 'Moradia',
    tipo: ['Despesa', 'Fixo'],
    valor: 371.90
  },
  {
    data: new Date(),
    descricao: 'Agua',
    categoria: 'Moradia',
    tipo: ['Despesa', 'Fixo'],
    valor: 101.00
  },
  {
    data: new Date(),
    descricao: 'Salário Mensal Tiffani',
    categoria: 'Salário',
    tipo: ['Receita', 'Fixo'],
    valor: 2500
  },
  {
    data: new Date(),
    descricao: 'Aluguel',
    categoria: 'Moradia',
    tipo: ['Receita', 'Fixo'],
    valor: 3000
  },
  {
    data: new Date(),
    descricao: 'Salário Mensal Tiffani',
    categoria: 'Salário',
    tipo: ['Receita', 'Fixo'],
    valor: 2500
  },
  {
    data: new Date(),
    descricao: 'Aluguel',
    categoria: 'Moradia',
    tipo: ['Receita', 'Fixo'],
    valor: 3000
  },
  {
    data: new Date(),
    descricao: 'Salário Mensal Tiffani',
    categoria: 'Salário',
    tipo: ['Receita', 'Fixo'],
    valor: 2500
  },
  {
    data: new Date(),
    descricao: 'Aluguel',
    categoria: 'Moradia',
    tipo: ['Receita', 'Fixo'],
    valor: 3000
  },
  {
    data: new Date(),
    descricao: 'Aluguel',
    categoria: 'Moradia',
    tipo: ['Receita', 'Fixo'],
    valor: 3000
  },
  {
    data: new Date(),
    descricao: 'Salário Mensal Tiffani',
    categoria: 'Salário',
    tipo: ['Receita', 'Fixo'],
    valor: 2500
  },
  {
    data: new Date(),
    descricao: 'Aluguel',
    categoria: 'Moradia',
    tipo: ['Receita', 'Fixo'],
    valor: 3000
  },
  {
    data: new Date(),
    descricao: 'Aluguel',
    categoria: 'Moradia',
    tipo: ['Receita', 'Fixo'],
    valor: 3000
  },
  {
    data: new Date(),
    descricao: 'Salário Mensal Tiffani',
    categoria: 'Salário',
    tipo: ['Receita', 'Fixo'],
    valor: 2500
  },
  {
    data: new Date(),
    descricao: 'Aluguel',
    categoria: 'Moradia',
    tipo: ['Receita', 'Fixo'],
    valor: 3000
  },
  {
    data: new Date(),
    descricao: 'Aluguel',
    categoria: 'Moradia',
    tipo: ['Receita', 'Fixo'],
    valor: 3000
  },
  {
    data: new Date(),
    descricao: 'Salário Mensal Tiffani',
    categoria: 'Salário',
    tipo: ['Receita', 'Fixo'],
    valor: 2500
  },
  {
    data: new Date(),
    descricao: 'Aluguel',
    categoria: 'Moradia',
    tipo: ['Receita', 'Fixo'],
    valor: 3000
  },
  {
    data: new Date(),
    descricao: 'Salário Mensal Tiffani',
    categoria: 'Salário',
    tipo: ['Receita', 'Fixo'],
    valor: 2500
  },
  {
    data: new Date(),
    descricao: 'Aluguel',
    categoria: 'Moradia',
    tipo: ['Receita', 'Fixo'],
    valor: 3000
  },
  {
    data: new Date(),
    descricao: 'Salário Mensal Tiffani',
    categoria: 'Salário',
    tipo: ['Receita', 'Fixo'],
    valor: 2500
  },
  {
    data: new Date(),
    descricao: 'Aluguel',
    categoria: 'Moradia',
    tipo: ['Receita', 'Fixo'],
    valor: 3000
  },
  {
    data: new Date(),
    descricao: 'Mesa para o escritório',
    categoria: 'Moradia',
    tipo: ['Despesa', 'Variável'],
    valor: 7000
  },
  {
    data: new Date(),
    descricao: 'Luz',
    categoria: 'Moradia',
    tipo: ['Despesa', 'Fixo'],
    valor: 371.90
  },
  {
    data: new Date(),
    descricao: 'Agua',
    categoria: 'Moradia',
    tipo: ['Despesa', 'Fixo'],
    valor: 101.00
  },
  {
    data: new Date(),
    descricao: 'Aluguel',
    categoria: 'Moradia',
    tipo: ['Receita', 'Fixo'],
    valor: 3000
  },
  {
    data: new Date(),
    descricao: 'Mesa para o escritório',
    categoria: 'Moradia',
    tipo: ['Despesa', 'Variável'],
    valor: 7000
  },
  {
    data: new Date(),
    descricao: 'Luz',
    categoria: 'Moradia',
    tipo: ['Despesa', 'Fixo'],
    valor: 371.90
  },
  {
    data: new Date(),
    descricao: 'Agua',
    categoria: 'Moradia',
    tipo: ['Despesa', 'Fixo'],
    valor: 101.00
  },
  {
    data: new Date(),
    descricao: 'Aluguel',
    categoria: 'Moradia',
    tipo: ['Receita', 'Fixo'],
    valor: 3000
  },
  {
    data: new Date(),
    descricao: 'Mesa para o escritório',
    categoria: 'Moradia',
    tipo: ['Despesa', 'Variável'],
    valor: 7000
  },
  {
    data: new Date(),
    descricao: 'Aluguel',
    categoria: 'Moradia',
    tipo: ['Receita', 'Fixo'],
    valor: 3000
  },
  {
    data: new Date(),
    descricao: 'Mesa para o escritório',
    categoria: 'Moradia',
    tipo: ['Despesa', 'Variável'],
    valor: 7000
  },
  {
    data: new Date(),
    descricao: 'Luz',
    categoria: 'Moradia',
    tipo: ['Despesa', 'Fixo'],
    valor: 371.90
  },
  {
    data: new Date(),
    descricao: 'Agua',
    categoria: 'Moradia',
    tipo: ['Despesa', 'Fixo'],
    valor: 101.00
  },
  {
    data: new Date(),
    descricao: 'Luz',
    categoria: 'Moradia',
    tipo: ['Despesa', 'Fixo'],
    valor: 371.90
  },
  {
    data: new Date(),
    descricao: 'Agua',
    categoria: 'Moradia',
    tipo: ['Despesa', 'Fixo'],
    valor: 101.00
  },
  {
    data: new Date(),
    descricao: 'Salário Mensal Tiffani',
    categoria: 'Salário',
    tipo: ['Receita', 'Fixo'],
    valor: 2500
  },
  {
    data: new Date(),
    descricao: 'Aluguel',
    categoria: 'Moradia',
    tipo: ['Receita', 'Fixo'],
    valor: 3000
  },
  {
    data: new Date(),
    descricao: 'Salário Mensal Tiffani',
    categoria: 'Salário',
    tipo: ['Receita', 'Fixo'],
    valor: 2500
  },
  {
    data: new Date(),
    descricao: 'Aluguel',
    categoria: 'Moradia',
    tipo: ['Receita', 'Fixo'],
    valor: 3000
  },
  {
    data: new Date(),
    descricao: 'Salário Mensal Tiffani',
    categoria: 'Salário',
    tipo: ['Receita', 'Fixo'],
    valor: 2500
  },
  {
    data: new Date(),
    descricao: 'Aluguel',
    categoria: 'Moradia',
    tipo: ['Receita', 'Fixo'],
    valor: 3000
  },
  {
    data: new Date(),
    descricao: 'Aluguel',
    categoria: 'Moradia',
    tipo: ['Receita', 'Fixo'],
    valor: 3000
  },
  {
    data: new Date(),
    descricao: 'Salário Mensal Tiffani',
    categoria: 'Salário',
    tipo: ['Receita', 'Fixo'],
    valor: 2500
  },
  {
    data: new Date(),
    descricao: 'Aluguel',
    categoria: 'Moradia',
    tipo: ['Receita', 'Fixo'],
    valor: 3000
  },
  {
    data: new Date(),
    descricao: 'Aluguel',
    categoria: 'Moradia',
    tipo: ['Receita', 'Fixo'],
    valor: 3000
  },
  {
    data: new Date(),
    descricao: 'Salário Mensal Tiffani',
    categoria: 'Salário',
    tipo: ['Receita', 'Fixo'],
    valor: 2500
  },
  {
    data: new Date(),
    descricao: 'Aluguel',
    categoria: 'Moradia',
    tipo: ['Receita', 'Fixo'],
    valor: 3000
  },
  {
    data: new Date(),
    descricao: 'Aluguel',
    categoria: 'Moradia',
    tipo: ['Receita', 'Fixo'],
    valor: 3000
  },
  {
    data: new Date(),
    descricao: 'Salário Mensal Tiffani',
    categoria: 'Salário',
    tipo: ['Receita', 'Fixo'],
    valor: 2500
  },
  {
    data: new Date(),
    descricao: 'Aluguel',
    categoria: 'Moradia',
    tipo: ['Receita', 'Fixo'],
    valor: 3000
  },
  {
    data: new Date(),
    descricao: 'Salário Mensal Tiffani',
    categoria: 'Salário',
    tipo: ['Receita', 'Fixo'],
    valor: 2500
  },
  {
    data: new Date(),
    descricao: 'Aluguel',
    categoria: 'Moradia',
    tipo: ['Receita', 'Fixo'],
    valor: 3000
  },
  {
    data: new Date(),
    descricao: 'Salário Mensal Tiffani',
    categoria: 'Salário',
    tipo: ['Receita', 'Fixo'],
    valor: 2500
  },
  {
    data: new Date(),
    descricao: 'Aluguel',
    categoria: 'Moradia',
    tipo: ['Receita', 'Fixo'],
    valor: 3000
  },
  {
    data: new Date(),
    descricao: 'Mesa para o escritório',
    categoria: 'Moradia',
    tipo: ['Despesa', 'Variável'],
    valor: 7000
  },
  {
    data: new Date(),
    descricao: 'Luz',
    categoria: 'Moradia',
    tipo: ['Despesa', 'Fixo'],
    valor: 371.90
  },
  {
    data: new Date(),
    descricao: 'Agua',
    categoria: 'Moradia',
    tipo: ['Despesa', 'Fixo'],
    valor: 101.00
  },
  {
    data: new Date(),
    descricao: 'Aluguel',
    categoria: 'Moradia',
    tipo: ['Receita', 'Fixo'],
    valor: 3000
  },
  {
    data: new Date(),
    descricao: 'Mesa para o escritório',
    categoria: 'Moradia',
    tipo: ['Despesa', 'Variável'],
    valor: 7000
  },
  {
    data: new Date(),
    descricao: 'Luz',
    categoria: 'Moradia',
    tipo: ['Despesa', 'Fixo'],
    valor: 371.90
  },
  {
    data: new Date(),
    descricao: 'Agua',
    categoria: 'Moradia',
    tipo: ['Despesa', 'Fixo'],
    valor: 101.00
  },
  {
    data: new Date(),
    descricao: 'Aluguel',
    categoria: 'Moradia',
    tipo: ['Receita', 'Fixo'],
    valor: 3000
  },
  {
    data: new Date(),
    descricao: 'Mesa para o escritório',
    categoria: 'Moradia',
    tipo: ['Despesa', 'Variável'],
    valor: 7000
  },
  {
    data: new Date(),
    descricao: 'Aluguel',
    categoria: 'Moradia',
    tipo: ['Receita', 'Fixo'],
    valor: 3000
  },
  {
    data: new Date(),
    descricao: 'Mesa para o escritório',
    categoria: 'Moradia',
    tipo: ['Despesa', 'Variável'],
    valor: 7000
  },
  {
    data: new Date(),
    descricao: 'Luz',
    categoria: 'Moradia',
    tipo: ['Despesa', 'Fixo'],
    valor: 371.90
  },
  {
    data: new Date(),
    descricao: 'Agua',
    categoria: 'Moradia',
    tipo: ['Despesa', 'Fixo'],
    valor: 101.00
  },
  {
    data: new Date(),
    descricao: 'Luz',
    categoria: 'Moradia',
    tipo: ['Despesa', 'Fixo'],
    valor: 371.90
  },
  {
    data: new Date(),
    descricao: 'Agua',
    categoria: 'Moradia',
    tipo: ['Despesa', 'Fixo'],
    valor: 101.00
  },
  {
    data: new Date(2025, 3, 15),
    descricao: 'Salário Mensal Tiffani',
    categoria: 'Salário',
    tipo: ['Receita', 'Fixo'],
    valor: 3000
  }]

  getTransacoes(): Transacao[] {
    return this.transacoes;
  }

  getTransacoesMes(mes: number) {
    const transacoesMes = this.transacoes.filter((transacao) => transacao.data.getMonth() + 1 === mes);
    return transacoesMes;
  }

  getReceitasMes(mes: number) {
    const transacoesMes = this.getTransacoesMes(mes);
    const receitasMes = transacoesMes.filter((transacao) => transacao.tipo.includes('Receita'));
    return receitasMes;
  }

  getDespesasMes(mes: number) {
    const transacoesMes = this.getTransacoesMes(mes);
    const despesasMes = transacoesMes.filter((transacao) => transacao.tipo.includes('Despesa'));
    return despesasMes;
  }
}
