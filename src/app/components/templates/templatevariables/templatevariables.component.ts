import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-templatevariables',
  standalone: true,
  imports: [],
  templateUrl: './templatevariables.component.html',
  styleUrl: './templatevariables.component.scss'
})
export class TemplatevariablesComponent implements AfterViewInit {
  @ViewChild('name') nameInput!: ElementRef;
  ngAfterViewInit(): void {
    console.log(this.nameInput.nativeElement.value)
  }
}
