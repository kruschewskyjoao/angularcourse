import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from "./components/newcomponents/newcomponents.component";
import { TemplatebindingComponent } from './components/templates/templatebinding/templatebinding.component';
import { TemplatevariablesComponent } from './components/templates/templatevariables/templatevariables.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, NewComponent, TemplatebindingComponent, TemplatevariablesComponent]
})
export class AppComponent {
  title = 'course-udemy';
}
