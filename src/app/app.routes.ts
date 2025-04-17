import { Routes } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch:'full'},
    {path: 'home', component: CardsComponent},
    {path: '**', redirectTo: 'home'}
];
