import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { TitleCardComponent } from './components/title-card/title-card.component';
import { TopicSelectorComponent } from './components/topic-selector/topic-selector.component';
import { ProjectInformationComponent } from './components/project-information/project-information.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    TitleCardComponent,
    TopicSelectorComponent,
    ProjectInformationComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'proj.ai';
}
