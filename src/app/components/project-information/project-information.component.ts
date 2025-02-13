import { Component, inject } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-information',
  imports: [CommonModule],
  templateUrl: './project-information.component.html',
  styleUrl: './project-information.component.scss',
})
export class ProjectInformationComponent {
  [x: string]: any;
  projectService: ProjectService = inject(ProjectService);
}
