import { Component, inject } from '@angular/core';
import { TopicSelector } from '../topic-selector';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-difficulty-dropdown-menu',
  imports: [CommonModule],
  templateUrl: './difficulty-dropdown-menu.component.html',
  styleUrl: './difficulty-dropdown-menu.component.scss',
})
export class DifficultyDropdownMenuComponent {
  isDropdownMenuShown = false;
  DifficultyLevel = TopicSelector.DifficultyLevel;
  projectService: ProjectService = inject(ProjectService);

  focusOnDifficultyLevelButton(event: Event, difficultyLevelButtonId: string) {
    event.preventDefault();
    if (this.isDropdownMenuShown) {
      document.getElementById(difficultyLevelButtonId)?.focus();
    }
  }

  toggleDropdownMenu() {
    this.isDropdownMenuShown = !this.isDropdownMenuShown;
  }

  setDifficultyLevel(difficultyLevel: TopicSelector.DifficultyLevel) {
    this.isDropdownMenuShown = false;
    this.projectService.difficultyLevel = difficultyLevel;
  }
}
