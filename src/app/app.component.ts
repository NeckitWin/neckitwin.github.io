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

  links = [
    { text: "GitHub", link: "https://github.com/neckitwin", icon: "https://static-00.iconduck.com/assets.00/github-icon-2048x1988-jzvzcf2t.png", color: "black" },
  ]
}
