import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ControlflowComponent } from "./components/templates/controlflow/controlflow.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ControlflowComponent]
})
export class AppComponent {
  title = 'course-udemy';
}
