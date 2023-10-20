import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  personalInfo = {
    name: 'Mykyta Vinohradov',
    photo: 'https://avatars.githubusercontent.com/u/90260450?v=4',
    email: 'neckit.v@gmail.com',
    github: 'NeckitWin',
  };

  // другие разделы...
}
