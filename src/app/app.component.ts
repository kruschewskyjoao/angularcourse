import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TemplateDeferrableViewsComponent } from "./components/template/template-deferrable-views/template-deferrable-views.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, TemplateDeferrableViewsComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "course-udemy";
}
