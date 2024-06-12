import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-templatebinding',
  standalone: true,
  imports: [NgClass, NgStyle, FormsModule],
  templateUrl: './templatebinding.component.html',
  styleUrl: './templatebinding.component.scss'
})
export class TemplatebindingComponent {
  public name = signal("John Doe");
  public nameNotChange = "John Doe Fixed";
  public nameImg = "Logo angular"
  public age: number = 32;
  public condition = this.age < 1 ? "teste" : "testefalse";
  public isDisabled = true;
  public srcValue = 'https://angular.io/assets/images/logos/angular/angular.svg';
  public isTextDecoration = this.age === 32 ? 'underline' : 'none';


  constructor() {
    setTimeout(() => {
      this.name.set("joão e maria");
    }, 2000)
  }

  public sum(v1: number, v2: number): number {
    return v1 + v2
  }

  public sumNew() {
    return this.age++
  }

  public subNew() {
    return this.age--
  }

  public onKeydown(event: KeyboardEvent) {
    console.log(event);
  }
}
