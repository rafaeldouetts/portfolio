import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

import {MatDialog, MatDialogModule} from '@angular/material/dialog'
import { EDialogPanelClass } from '../../enum/EDialogClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
    src:'assets/img/projects/vfull.png',
    alt: 'Projeto Netflix Fake',
    title: 'Netflix Fake',
    width: '100px',
    height: '51px',
    description: 'teste de descricao',
    links: {
      name: 'Conheca o blog',
      href: 'https://devdouetts.com.br'
    }
  },
  {
    src:'assets/img/projects/vfull.png',
    alt: 'Projeto B3 Processor',
    title: 'B3 Processor',
    width: '100px',
    height: '51px',
    description: 'teste de descricao',
    links: {
      name: 'Conheca o blog',
      href: 'https://devdouetts.com.br'
    }
  },
  {
    src:'assets/img/projects/vfull.png',
    alt: 'Projeto Planning Poker',
    title: 'Planning Poker',
    width: '100px',
    height: '51px',
    description: 'teste de descricao',
    links: {
      name: 'Conheca o blog',
      href: 'https://devdouetts.com.br'
    }
  },
  {
    src:'assets/img/projects/vfull.png',
    alt: 'Projeto Azure Functions',
    title: 'Azure Functions',
    width: '100px',
    height: '51px',
    description: 'teste de descricao',
    links: {
      name: 'Conheca o blog',
      href: 'https://devdouetts.com.br'
    }
  },
])

  public openDialog(data: IProjects)
  {
    this.#dialog.open(DialogProjectsComponent, {
      data, 
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
