import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'neckitwin';
  textButton = "Кликни кнопку";
  textFooter = "Футер проекта";
  pageTitle = 'Тестик';

  onMessage() {
    alert("Тестик");
  }

  protected readonly onmessage = onmessage;
}
