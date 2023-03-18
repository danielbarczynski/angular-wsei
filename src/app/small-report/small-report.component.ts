import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-small-report',
  templateUrl: './small-report.component.html',
  styleUrls: ['./small-report.component.css']
})
export class SmallReportComponent {
  @Input() message: string = '';
}
