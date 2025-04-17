import { Component } from '@angular/core';
import { Transacao } from '../../interfaces/transacao';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transacao',
  imports: [CommonModule],
  templateUrl: './transacao.component.html',
  styleUrl: './transacao.component.css'
})
export class TransacaoComponent {

  transacoes: Transacao[] = [{
    data: new Date(),
    descricao: 'Tenis',
    categoria: 'Lazer',
    tipo: ['Despesa','Variável'],
    valor: 350},
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
      tipo: ['Despesa', 'Fixo'],
      valor: 3000
    },
    {
      data: new Date(),
      descricao: 'Luz',
      categoria: 'Moradia',
      tipo: ['Despesa', 'Fixo'],
      valor: 371.90
  }]

  categoriaIcones: { [key: string]: { icon: string; cor: string } } = {
    'Lazer': { icon: 'fas fa-gamepad', cor: '#e67e22' },
    'Salário': { icon: 'fas fa-briefcase', cor: '#27ae60' },
    'Alimentação': { icon: 'fas fa-utensils', cor: '#c0392b' },
    'Transporte': { icon: 'fas fa-car', cor: '#2980b9' },
    'Moradia': { icon: 'fas fa-house', cor: '#2980b9' }
    // adicione mais categorias conforme necessário
  };

  tipoClasses: { [key: string]: string } = {
    'Receita': 'badge badge-receita',
    'Despesa': 'badge badge-despesa',
    'Fixo': 'badge badge-fixo',
    'Variável': 'badge badge-variavel'
  };

}
