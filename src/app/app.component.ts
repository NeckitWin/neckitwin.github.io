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
    { link: "https://github.com/neckitwin", text: "GitHub", icon: "https://static-00.iconduck.com/assets.00/github-icon-2048x1988-jzvzcf2t.png", color: "#000000" },
    {  link: "https://discord.gg/gzYk2gcqAG", text: "Мой Discord сервер", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/discord-white-icon.png", color:"#5865F2" },
    { link: "https://arcaneworld.su/", text: "Мой проект майнкрафт с модами", icon: "https://arcaneworld.su/image/logo.png", color: "#ff4747" },
    { link: "https://discord.gg/arcaneworldsu", text: "Дискорд проекта", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/discord-white-icon.png", color: "#5865F2" },
    { link: "https://t.me/neckitwin", text: "Мой Telegram канал", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/telegram-white-icon.png", color: "#0088CC" },
    { link: "https://www.instagram.com/neckitwin/", text: "Мой инстаграм", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png", color: "#E1306C" },
    { link: "https://tiktok.com/neckitwin", text:"Мой тикиток", icon: "https://cdn0.iconfinder.com/data/icons/logos-brands-7/512/TikTok_logo_app0-512.png", color: "#9b002c" },
    { link: "https://steamcommunity.com/profiles/76561199251449827/", text: "Мой Steam", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/512px-Steam_icon_logo.svg.png", color: "#171A21" },
    { link: "https://open.spotify.com/user/31rdrs7t3qghrkkwt77s2q2dn4ia", text: "Мой Spotify", icon: "https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png", color: "#1DB954" }
  ];
}
