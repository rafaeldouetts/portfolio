import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  cards = [
    { title: 'Beefor', description: 'Participacao no desenvolvimento atraves da empresa Cadmus produto focado em gerenciamento de praticas ageis', image: 'https://via.placeholder.com/200' },
    { title: 'Lovers', description: 'Participacao no desenvolvimento atraves da empresa CacauShow produto de findelidade', image: 'https://via.placeholder.com/200' },
    { title: 'PlanningPoker', description: 'Ideia propria para testes de conhecimento em aplciacoes do que utilizam o SignalR', image: 'https://via.placeholder.com/200' },
    { title: 'THalitaNails', description: 'projeto para agendamento de servicoes esteticos', image: 'https://via.placeholder.com/200' },
    { title: 'Azure Function', description: 'Conjunto projetos para testes de conhecimento nas diversas arquiteturas de azure function', image: 'https://via.placeholder.com/200' },
    { title: 'Azure Blob', description: 'projeto para publicacao de imagens em um container azure blob', image: 'https://via.placeholder.com/200' },
    { title: 'Monitoramento', description: 'Estrutura formada por prometheus, promtail, loki e grafana para monitoramento de aplicacoes', image: 'https://via.placeholder.com/200' },
    { title: 'Qualidade e Seguranca', description: 'SonarQube para verificacao de boas praticas e seguranca no codigo fonte', image: 'https://via.placeholder.com/200' },
    { title: 'Testes e2e', description: 'utilizacao do selenium, testes desenvolvidos utilizando specflow para criacao das feature selenium grid container para servir os navegadores e rodar os testes podendo gravar o teste', image: 'https://via.placeholder.com/200' },
    { title: 'testes de unidade', description: 'testes para validar a menor parte do codigo utilizando tanto xunit como nunit', image: 'https://via.placeholder.com/200' },
    { title: 'testes de integracao', description: 'testes para validar a integracao entre API utilizando xunit ou nunit', image: 'https://via.placeholder.com/200' },
  ];

  currentIndex = 0;

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateCarousel();
    }
  }

  next() {
    if (this.currentIndex < this.cards.length - 1) {
      this.currentIndex++;
      this.updateCarousel();
    }
  }

  updateCarousel() {
    const container = document.querySelector('.carousel-container');
    if (container) {
      // container.style.transform = `translateX(-${this.currentIndex * 220}px)`;
    }
  }
}

