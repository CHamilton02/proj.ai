import { Component, output } from '@angular/core';

@Component({
  selector: 'app-project-topic-input',
  imports: [],
  templateUrl: './project-topic-input.component.html',
  styleUrl: './project-topic-input.component.scss',
})
export class ProjectTopicInputComponent {
  inputtedTopic = output<string>();

  addProjectTopic() {
    const projectTopic: string = (
      document.getElementById('project-topic-input') as HTMLInputElement
    ).value;

    if (projectTopic) this.inputtedTopic.emit(projectTopic);
  }
}
