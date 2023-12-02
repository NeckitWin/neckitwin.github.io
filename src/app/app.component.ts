import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  experiences = [
    { key: "java", value: "⭐⭐⭐⭐⭐" },
    { key: "javascript", value: "⭐⭐⭐⭐⭐" },
    { key: "angular", value: "⭐⭐⭐⭐⭐" },
    { key: "react", value: "⭐⭐⭐⭐⭐" },
    { key: "python", value: "⭐⭐⭐⭐⭐" },
  ];
}
