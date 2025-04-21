import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor() { }

  categoriaIcones: { [key: string]: { icon: string; cor: string } } = {
    'Honorários':         { icon: 'fas fa-balance-scale', cor: '#2c3e50' },  // Receita principal
    'Custas Processuais': { icon: 'fas fa-file-invoice-dollar', cor: '#e74c3c' }, // Gastos com processos
    'Salário':           { icon: 'fas fa-user-tie', cor: '#27ae60' },      // Pagamento de pessoal
    'Aluguel':            { icon: 'fas fa-building', cor: '#8e44ad' },      // Espaço físico
    'Transporte':         { icon: 'fas fa-car', cor: '#2980b9' },           // Deslocamentos
    'Materiais':          { icon: 'fas fa-box-open', cor: '#f39c12' },      // Material de escritório
    'Tecnologia':         { icon: 'fas fa-laptop-code', cor: '#16a085' },   // Softwares, TI
    'Marketing':          { icon: 'fas fa-bullhorn', cor: '#d35400' },      // Divulgação
    'Consultorias':       { icon: 'fas fa-user-check', cor: '#7f8c8d' },    // Serviços externos
    'Impostos':           { icon: 'fas fa-receipt', cor: '#c0392b' },       // Obrigações fiscais
    'Investimentos':      { icon: 'fas fa-chart-line', cor: '#2ecc71' },    // Fundo de reserva, expansão
    'Capacitação':        { icon: 'fas fa-chalkboard-teacher', cor: '#9b59b6' }, // Cursos, palestras
    'Eventos':            { icon: 'fas fa-calendar-alt', cor: '#3498db' },  // Congressos, workshops
    'Serviços Gerais':    { icon: 'fas fa-concierge-bell', cor: '#bdc3c7' }, // Limpeza, manutenção
    'Doações':            { icon: 'fas fa-hands-helping', cor: '#1abc9c' }   // Ações sociais
  };
  

  getIcone(categoria: string) {
    return this.categoriaIcones[categoria] || { icon: 'fas fa-question', cor: '#7f8c8d' };
  }

  getTodasCategorias() {
    return Object.keys(this.categoriaIcones);
  }

  getTodasComIcones() {
    return this.categoriaIcones;
  }

}
