import {Component, Input} from '@angular/core';
import {EducationItem} from "../professional-background.result";

@Component({
  selector: 'app-education-table',
  templateUrl: './education-table.component.html',
  styleUrls: ['./education-table.component.css']
})
export class EducationTableComponent {

  @Input() educations: EducationItem[]
  @Input() background: string

  opened = false

  open() {
    this.opened = true
  }

  close() {
    this.opened = false
  }
}
