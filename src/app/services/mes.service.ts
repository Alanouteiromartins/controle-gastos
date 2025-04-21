import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MesService {

  mesAtual = new Date().getMonth() + 1;
  meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  constructor() { }

  private mesAtualSubject = new BehaviorSubject<number>(this.mesAtual);
  mesAtual$ = this.mesAtualSubject.asObservable();


  setMesAtual(mes: number){
    this.mesAtualSubject.next(mes);
  }

  getMeses(){
    return this.meses;
  }


}
