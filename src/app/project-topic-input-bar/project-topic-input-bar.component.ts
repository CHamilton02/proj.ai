import { Component, inject, output } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-topic-input-bar',
  imports: [],
  templateUrl: './project-topic-input-bar.component.html',
  styleUrl: './project-topic-input-bar.component.scss',
})
export class ProjectTopicInputBarComponent {
  inputProjectTopic = output<string>();
  projectService: ProjectService = inject(ProjectService);

  addProjectTopic() {
    const projectTopic: string = (
      document.getElementById('project-topic-input') as HTMLInputElement
    ).value;

    (document.getElementById('project-topic-input') as HTMLInputElement).value =
      '';

    if (projectTopic) this.inputProjectTopic.emit(projectTopic);
  }
}
