import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  profileImageSrc = 'https://avatars.githubusercontent.com/u/90260450?v=4';
  profileName = 'NecktiWin';
  isPro = true;

  phoneNumber = '735-580-571';
  country = 'Poland';
  email = 'neckit.v@gmail.com';
  education = 'Technikum Nr I ZSTI';

  // Другие переменные и данные

  // Обработчик для позвонить по номеру телефона
  callPhoneNumber() {
    window.location.href = 'tel:' + this.phoneNumber;
  }

  // Обработчик для отправки письма на адрес электронной почты
  sendEmail() {
    window.location.href = 'mailto:' + this.email;
  }

  aboutMeText = "Hello! 👋 I'm Nikita. What if I told you that everything you see isn't real? It's all just code. 💡";

  whatIDoText = "I am a Full-stack developer with a passion for programming, particularly my favorite language, Java. I also specialize in web development, utilizing the following languages:";

  skills = [
    '⭐️⭐️ Java, my beloved programming language.',
    '⭐️⭐️⭐️⭐️⭐️ HTML for content structuring.',
    '⭐️⭐️⭐️⭐️⭐️ CSS for style and elegance.',
    '⭐️⭐️⭐️ JavaScript for interactivity.',
    '⭐️⭐️ Node.js for server-side magic.'
  ];

  connectWithMeText = "If you want to chat about projects, ideas, or just have a friendly conversation, reach out to me on:";
  socialMedia = ['Discord', 'Instagram'];
  moonText = "What if you couldn't wake up? 🌙";
}
