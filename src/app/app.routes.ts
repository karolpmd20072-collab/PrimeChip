import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Carrinho } from './carrinho/carrinho';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'carrinho', component: Carrinho }
];