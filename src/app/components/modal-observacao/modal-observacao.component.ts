import { Component, Input, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-modal-observacao',
  imports: [],
  templateUrl: './modal-observacao.component.html',
  styleUrl: './modal-observacao.component.css'
})
export class ModalObservacaoComponent {


  @Input() observacao: string = '';

}
