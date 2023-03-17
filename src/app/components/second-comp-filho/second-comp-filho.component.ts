import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-second-comp-filho',
  templateUrl: './second-comp-filho.component.html',
  styleUrls: ['./second-comp-filho.component.css']
})
export class SecondCompFilhoComponent {
  @Input() name: string = '';
}
