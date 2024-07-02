import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-gauge-chart',
  standalone: true,
  imports: [],
  templateUrl: './gauge-chart.component.html',
  styleUrl: './gauge-chart.component.scss'
})
export class GaugeChartComponent implements OnChanges{
  @Input() gaugeValue: number = 0;
  @Input() title: string = "";

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      this.updateGaugeValue();
    }
  }

  private updateGaugeValue() {
    const gaugeElement = document.querySelector('.gauge-value') as SVGPathElement;
    if (gaugeElement) {
      gaugeElement.style.strokeDasharray = `${this.gaugeValue}, 100`;
    }
  }
}
