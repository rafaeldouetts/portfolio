import { Component, Inject, OnInit, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { IProjects } from '../../../interface/IProjects.interface';

@Component({
  selector: 'app-dialog-projects',
  imports: [MatDialogModule],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.scss'
})
export class DialogProjectsComponent implements OnInit{

  public getData = signal<IProjects | null>(null);

  constructor(@Inject(MAT_DIALOG_DATA) private _data: IProjects, private dialogRef: MatDialogRef<DialogProjectsComponent>) { }

  ngOnInit(): void {
    this.getData.set(this._data);
  }

  public closeModel()
  {
    this.dialogRef.close();
  }
}
