import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrinho',
  imports: [CommonModule],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css',
})
export class Carrinho {
  itens = [
    { nome: 'Processador Intel Core i5-13400F', preco: 'R$ 1.274,15' },
    { nome: 'Placa de Vídeo RTX 4060 Ti', preco: 'R$ 2.804,15' }
  ];
}