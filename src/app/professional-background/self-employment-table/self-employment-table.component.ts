import {Component, Input} from '@angular/core';
import {SelfEmploymentItem} from "../professional-background.result";

@Component({
  selector: 'app-self-employment-table',
  templateUrl: './self-employment-table.component.html',
  styleUrls: ['./self-employment-table.component.css']
})
export class SelfEmploymentTableComponent {

  @Input() selfEmployments: SelfEmploymentItem[]
}
