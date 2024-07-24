import { Component } from "@angular/core";
import { Observable, delay, of } from "rxjs";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: "app-controlflow",
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: "./controlflow.component.html",
  styleUrl: "./controlflow.component.scss",
})
export class ControlflowComponent {
  public isTrue = true;
  public switchCondition = "B";
  public itens = [
    {
      name: "Dener troquatte",
    },
  ];

  public loadingData$: Observable<string[]> = of([
    "Item 1",
    "Item 2",
    "Item 3",
  ]).pipe(delay(3000));

  public addNewName(value: string) {
    return this.itens.push({ name: value });
  }
}
