import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TitleCardComponent } from './title-card/title-card.component';
import { TopicSelectorComponent } from './topic-selector/topic-selector.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, TitleCardComponent, TopicSelectorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'proj.ai';
}
