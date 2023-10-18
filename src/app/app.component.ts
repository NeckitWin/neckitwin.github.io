import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private textColor = false;
  private isVisible = true;

  toggleColor() {
    this.textColor = !this.textColor;
  }

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  getTextColor() {
    return this.textColor ? 'red' : 'black';
  }

  getContentVisibility() {
    return this.isVisible ? 'visible' : 'hidden';
  }
}
