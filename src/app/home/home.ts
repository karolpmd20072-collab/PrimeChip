import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  titulo = 'Ofertas Imperdíveis da SEMANA!';

  produtos = [
    {
      nome: 'Processador Intel Core i5-13400F',
      antigo: 'R$ 1.499,00',
      novo: 'R$ 1.274,15',
      imagem: '/assets/imagens/processador.png',
      alt: 'PROCESSADOR I5'
    },
    {
      nome: 'Placa de Vídeo RTX 4060 Ti',
      antigo: 'R$ 3.299,00',
      novo: 'R$ 2.804,15',
      imagem: '/assets/imagens/placa 4060ti.jpg',
      alt: 'PLACA DE VÍDEO'
    },
    {
      nome: 'Memória RAM DDR4 FURY 16GB 3200MHz',
      antigo: 'R$ 980,00',
      novo: 'R$ 833,00',
      imagem: '/assets/imagens/memoria ran.jpg',
      alt: 'MEMÓRIA RAM'
    },
    {
      nome: 'SSD Kingston NV2 1TB NVMe M.2',
      antigo: 'R$ 950,00',
      novo: 'R$ 807,50',
      imagem: '/assets/imagens/memoria kingston.jpg',
      alt: 'SSD KINGSTON'
    },
    {
      nome: 'Fonte Corsair CV550 550W 80 Plus Bronze',
      antigo: 'R$ 400,00',
      novo: 'R$ 340,00',
      imagem: '/assets/imagens/Fonte.png',
      alt: 'FONTE CORSAIR'
    },
    {
      nome: 'Water Cooler MasterLiquid 240mm',
      antigo: 'R$ 684,00',
      novo: 'R$ 581,40',
      imagem: '/assets/imagens/Water cooler.png',
      alt: 'WATER COOLER'
    },
    {
      nome: 'Gabinete Gamer ATX Vidro Temperado',
      antigo: 'R$ 399,00',
      novo: 'R$ 339,15',
      imagem: '/assets/imagens/Gabinete.PNG',
      alt: 'GABINETE'
    },
    {
      nome: 'Placa Mãe ASUS TUF Gaming B550M-Plus',
      antigo: 'R$ 793,49',
      novo: 'R$ 674,39',
      imagem: '/assets/imagens/Placa Mae.png',
      alt: 'PLACA MÃE'
    },
    {
      nome: 'Processador AMD Ryzen 7 5700X',
      antigo: 'R$ 1.208,00',
      novo: 'R$ 1.026,80',
      imagem: '/assets/imagens/Amd ryzen.png',
      alt: 'AMD RYZEN'
    }
  ];

  mensagem = '';

  mostrarMensagem(produto: string) {
    this.mensagem = `Produto selecionado: ${produto}`;
  }
}