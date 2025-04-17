import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavegacaoComponent } from "./components/navegacao/navegacao.component";
import { CardsComponent } from "./components/cards/cards.component";
import { TransacaoComponent } from "./components/transacao/transacao.component";
import { ModalTransacaoComponent } from "./components/modal-transacao/modal-transacao.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavegacaoComponent, CardsComponent, TransacaoComponent, ModalTransacaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'controle-gastos-app';
}
