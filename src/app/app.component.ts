import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  profileImageSrc = 'https://avatars.githubusercontent.com/u/90260450?v=4';
  profileName = 'NeckitWin';
  isPro = true;

  highlightItems: string[] = ['PRO', 'IT', 'ARTIST'];

  phoneNumber = '735-58X-XXX';
  country = 'Poland';
  email = 'mykyta.vinohradov@gmail.com';
  education = 'Technikum Nr I ZSTI';

  callPhoneNumber() {
    window.location.href = 'tel:' + this.phoneNumber;
  }

  sendEmail() {
    window.location.href = 'mailto:' + this.email;
  }

  aboutMeText = "Hello! 👋 I'm Nikita. Just coder. 💡";

  whatIDoText = "I am a Full-stack developer with a passion for programming, particularly my favorite language, Java. I also specialize in web development, utilizing the following languages:";

  skills = [
    '⭐️⭐️⌛️⌛️⌛️ Java, my beloved programming language.',
    '⭐️⭐️⭐️⭐️⌛️ HTML for content structuring.',
    '⭐️⭐️⭐️⭐️⌛️ CSS for style and elegance.',
    '⭐️⭐️⌛️⌛️⌛️ JavaScript for interactivity.'
  ];

  connectWithMeText = "If you want to chat about projects, ideas, or just have a friendly conversation, reach out to me on:";
  socialMedia = ['Discord', 'Instagram'];

  socialMediaLinks: { platform: string, link: string }[] = [
    { platform: 'Discord', link: 'https://discord.gg/gzYk2gcqAG' },
    { platform: 'Instagram', link: 'https://www.instagram.com/neckitwin' },
    { platform: 'Telegram', link: 'https://t.me/neckitwin' }
  ];

  moonText = "Is reality real? 🌙";
}
