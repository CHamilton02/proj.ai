import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { ModalComponent } from '../modal/modal.component';
import { ProjectTopicInputBarComponent } from '../project-topic-input-bar/project-topic-input-bar.component';
import { ProjectTopicButtonComponent } from '../project-topic-button/project-topic-button.component';
import { DifficultyDropdownMenuComponent } from '../difficulty-dropdown-menu/difficulty-dropdown-menu.component';

@Component({
  selector: 'app-topic-selector',
  imports: [
    CommonModule,
    ModalComponent,
    ProjectTopicInputBarComponent,
    ProjectTopicButtonComponent,
    DifficultyDropdownMenuComponent,
  ],
  templateUrl: './topic-selector.component.html',
  styleUrl: './topic-selector.component.scss',
})
export class TopicSelectorComponent {
  showErrorModal = false;
  projectService: ProjectService = inject(ProjectService);

  onSubmitToggle() {
    if (this.projectService.difficultyLevel) {
      this.projectService.generateProject();
    } else {
      this.showErrorModal = true;
    }
  }
}
