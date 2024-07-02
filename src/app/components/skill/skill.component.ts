import { Component } from '@angular/core';
import { GaugeChartComponent } from '../gauge-chart/gauge-chart.component';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [GaugeChartComponent],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {

}
