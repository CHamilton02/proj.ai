import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { ProjectService } from '../project.service';

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
}
