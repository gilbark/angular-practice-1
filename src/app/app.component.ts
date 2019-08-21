import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navigateTo = 'recipe';

  onNavigate(feature: string) {
    this.navigateTo = feature;
    console.log(this.navigateTo);
  }
}
