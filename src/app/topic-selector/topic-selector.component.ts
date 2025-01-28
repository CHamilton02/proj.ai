import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TopicSelector } from '../topic-selector';
import { ProjectService } from '../project.service';
import { ModalComponent } from '../modal/modal.component';
import { ProjectTopicInputBarComponent } from '../project-topic-input-bar/project-topic-input-bar.component';

@Component({
  selector: 'app-topic-selector',
  imports: [CommonModule, ModalComponent, ProjectTopicInputBarComponent],
  templateUrl: './topic-selector.component.html',
  styleUrl: './topic-selector.component.scss',
})
export class TopicSelectorComponent {
  defaultProjectTopics = [
    'Web Development',
    'Embedded Systems',
    'Mobile App',
    'Artificial Intelligence',
  ];
  projectTopics: Set<string> = new Set();
  isDropdownMenuShown = false;
  showErrorModal = false;
  DifficultyLevel = TopicSelector.DifficultyLevel;
  difficultyLevel: TopicSelector.DifficultyLevel =
    TopicSelector.DifficultyLevel.Undefined;
  projectService: ProjectService = inject(ProjectService);

  toggleDropdownMenu() {
    this.isDropdownMenuShown = !this.isDropdownMenuShown;
  }

  addProjectTopic(projectTopic: string) {
    this.projectTopics.add(projectTopic);
  }

  removeProjectTopic(projectTopic: string) {
    this.projectTopics.delete(projectTopic);
  }

  focusOnDifficultyLevelButton(event: Event, difficultyLevelButtonId: string) {
    event.preventDefault();
    if (this.isDropdownMenuShown) {
      document.getElementById(difficultyLevelButtonId)?.focus();
    }
  }

  setDifficultyLevel(difficultyLevel: TopicSelector.DifficultyLevel) {
    this.isDropdownMenuShown = false;
    this.difficultyLevel = difficultyLevel;
  }

  onSubmitToggle() {
    if (this.projectTopics && this.difficultyLevel) {
      this.projectService.generateProject(
        Array.from(this.projectTopics),
        this.difficultyLevel
      );
    } else {
      this.showErrorModal = true;
    }
  }
}
