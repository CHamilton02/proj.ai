import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-topic-button',
  imports: [CommonModule],
  templateUrl: './project-topic-button.component.html',
  styleUrl: './project-topic-button.component.scss',
})
export class ProjectTopicButtonComponent {
  projectTopic = input.required<string>();
  suggestedTopic = input<boolean>();
  projectService: ProjectService = inject(ProjectService);

  toggleProjectButton() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(
        navigator.userAgent
      ) &&
      this.projectService.focusedProject !== this.projectTopic()
    ) {
      document
        .getElementById(`project-topic-button-${this.projectTopic()}`)
        ?.focus();
      this.projectService.focusedProject = this.projectTopic();
    } else if (this.suggestedTopic()) {
      this.projectService.addProjectTopic(this.projectTopic());
      this.projectService.focusedProject = undefined;
    } else {
      this.projectService.removeProjectTopic(this.projectTopic());
      this.projectService.focusedProject = undefined;
    }
  }
}
