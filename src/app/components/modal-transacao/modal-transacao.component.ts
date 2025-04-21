import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TransacaoService } from '../../services/transacao.service';
import { Transacao } from '../../interfaces/transacao';
import { AlertService } from '../../services/alerta.service';
import { MesService } from '../../services/mes.service';
import { CategoriaService } from '../../services/categoria.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-modal-transacao',
  imports: [FormsModule, NgFor],
  templateUrl: './modal-transacao.component.html',
  styleUrl: './modal-transacao.component.css'
})
export class ModalTransacaoComponent implements OnInit {

  constructor(private transacaoService: TransacaoService, private alertaService: AlertService, private categoriaService: CategoriaService) { }


  tipoTransacao: string = 'Receita';
  descricao!: string;
  valor!: number;
  data!: Date;
  categoriaSelecionada: string = '';
  tipo: string = 'Fixo';
  observacao!: string;
  mesAtual = 0;
  categorias: string[] = [];

  ngOnInit(): void {
    this.categorias = this.categoriaService.getTodasCategorias();
  }

  addTransacao() {
    if (this.descricao === '' || this.valor === undefined || this.categoriaSelecionada === '' || this.data === undefined) {
      this.alertaService.error('Por favor preencha todos os campos');
      return
    }
    const tipos = [this.tipoTransacao, this.tipo]
    const data: Date = new Date(this.data);
    const novaTransacao: Transacao = {
      tipo: tipos,
      descricao: this.descricao,
      data: data,
      categoria: this.categoriaSelecionada,
      valor: this.valor,
      observacao: this.observacao
    }

    this.transacaoService.addTransacao(novaTransacao).subscribe((transacao) => {
      this.alertaService.success('Transação cadastrada com sucesso!');
    })
  }

}
