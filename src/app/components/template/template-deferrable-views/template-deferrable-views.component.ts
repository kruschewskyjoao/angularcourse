import { Component } from '@angular/core';
import { NewComponentComponent } from "../../new-component/new-component.component";
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-template-deferrable-views',
  standalone: true,
  imports: [NewComponentComponent],
  templateUrl: './template-deferrable-views.component.html',
  styleUrl: './template-deferrable-views.component.scss'
})
export class TemplateDeferrableViewsComponent {
  public isTrue = false;

  public loadingData$: Observable<string[]> = of([
    'item 1',
    'item 2',
    'item 3',
    'item 4',
    'item 5',
    'item 6',
    'item 7',
    'item 8',
    'item 9',
    'item 10'
  ]).pipe(delay(3000))
}
