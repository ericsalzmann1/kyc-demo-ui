import {Component, Input} from '@angular/core';
import {UnemploymentItem} from "../professional-background.result";

@Component({
  selector: 'app-unemployment-table',
  templateUrl: './unemployment-table.component.html',
  styleUrls: ['./unemployment-table.component.css']
})
export class UnemploymentTableComponent {

  @Input() unemploymentPeriods: UnemploymentItem[]
}
