import { Injectable, signal } from '@angular/core';
import { Transacao } from '../interfaces/transacao';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {

  constructor(private http: HttpClient) { }

  transacaoAdicionada = signal(0);
  
  getTransacoes(): Observable<Transacao[]> {
    return this.http.get<Transacao[]>(`${environment.apiUrl}`);
  }

  getTransacoesMes(mes: number): Observable<Transacao[]> {
    return this.http.get<Transacao[]>(`${environment.apiUrl}`).pipe(
      map((transacoes) => {
        // Filtra as transações para o mês desejado
        return transacoes.filter((transacao) => {
          const dataTransacao = new Date(transacao.data); // Converte a data da transação
          return dataTransacao.getMonth() + 1 === mes; // Compara com o mês passado (mes - 1 no JS, então +1)
        });
      })
    );
  }

  getReceitasMes(mes: number): Observable<Transacao[]> {
    return this.http.get<Transacao[]>(`${environment.apiUrl}`).pipe(
      map((transacoes) => {
        return transacoes.filter((transacao) => {
          const dataTransacao = new Date(transacao.data);
          const ehDoMes = dataTransacao.getMonth() + 1 === mes;
          const ehReceita = transacao.tipo.includes('Receita');
          return ehDoMes && ehReceita;
        });
      })
    );
  }
  

  getDespesasMes(mes: number): Observable<Transacao[]> {
    return this.http.get<Transacao[]>(`${environment.apiUrl}`).pipe(
      map((transacoes) => {
        return transacoes.filter((transacao) => {
          const dataTransacao = new Date(transacao.data);
          const ehDoMes = dataTransacao.getMonth() +1 === mes;
          const ehDespesa = transacao.tipo.includes('Despesa');
          return ehDoMes && ehDespesa;
        })
      })
    )
  }

  getTransacoesFiltradas(categoria: string, mes: number, tipo: string){
    return this.http.get<Transacao[]>(`${environment.apiUrl}`).pipe(
      map((transacoes) =>{
        return transacoes.filter((transacao) =>{
          const dataTransacao = new Date(transacao.data);
          const ehDoMes = dataTransacao.getMonth() + 1 === mes;
          const porCategorias = categoria === '' || transacao.categoria.includes(categoria);
          const porTipo =  tipo === '' || transacao.tipo.includes(tipo);
          return ehDoMes && porTipo && porCategorias;
        })
      })
    )
  }

  getReceitasFiltradas(categoria: string, mes: number, tipo: string){
    return this.http.get<Transacao[]>(`${environment.apiUrl}`).pipe(
      map((transacoes) =>{
        return transacoes.filter((transacao) =>{
          const dataTransacao = new Date(transacao.data);
          const ehDoMes = dataTransacao.getMonth() + 1 === mes;
          const porCategorias = categoria === '' || transacao.categoria.includes(categoria);
          const porTipo =  tipo === '' || transacao.tipo.includes(tipo);
          const ehReceita = transacao.tipo.includes('Receita');
          return ehDoMes && porTipo && porCategorias && ehReceita;
        })
      })
    )
  }

  getDespesasFiltradas(categoria: string, mes: number, tipo: string){
    return this.http.get<Transacao[]>(`${environment.apiUrl}`).pipe(
      map((transacoes) =>{
        return transacoes.filter((transacao) =>{
          const dataTransacao = new Date(transacao.data);
          const ehDoMes = dataTransacao.getMonth() + 1 === mes;
          const porCategorias = categoria === '' || transacao.categoria.includes(categoria);
          const porTipo =  tipo === '' || transacao.tipo.includes(tipo);
          const ehReceita = transacao.tipo.includes('Despesa');
          return ehDoMes && porTipo && porCategorias && ehReceita;
        })
      })
    )
  }

  addTransacao(transacao: Transacao): Observable<Transacao>{
    return this.http.post<Transacao>(`${environment.apiUrl}`, transacao).pipe(
      tap(() => this.transacaoAdicionada.update(valor => valor +1))
    );
  }

  deleteTransacao(id: string){
    return this.http.delete(`${environment.apiUrl}/${id}`).pipe(
      tap(()=>{
        this.transacaoAdicionada.update(valor => valor + 1);
      })
    )
  }
}
