import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  public arrayExperiences = signal<IExperiences[]>([
    {
      summary:{
        strong:'QA',
        p:'| Cacau Show | 01/2024 - 11/2024'
      },
      text: 'teste 1'
    },
    {
      summary:{
        strong:'Desenvolvedor Full-Stack Pleno',
        p:'| Confitec | xx/xxxx - xx/xxxx'
      },
      text: 'teste 2'
    },
    {
      summary:{
        strong:'Desenvolvedor Full-Stack Pleno',
        p:'| Cadmus | xx/xxxx - xx/xxxx'
      },
      text: 'teste 3'
    }
  ]);

}
