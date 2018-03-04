import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navigateToFacebook() {
    window.open("https://www.facebook.com/groups/359712267823885/");
  }

  navigateToYouTube() {
    window.open("https://www.youtube.com/channel/UCPLXV7gRVnPEK3axc-4om6g/videos");
  }

  navigateToKuula() {
    window.open("https://kuula.co/profile/Toon/collections");
  }
}