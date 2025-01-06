import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TopicSelector } from '../topic-selector';

@Component({
  selector: 'app-topic-selector',
  imports: [CommonModule],
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
  DifficultyLevel = TopicSelector.DifficultyLevel;
  difficultyLevel: TopicSelector.DifficultyLevel =
    TopicSelector.DifficultyLevel.Undefined;

  toggleDropdownMenu() {
    this.isDropdownMenuShown = !this.isDropdownMenuShown;
  }

  addProjectTopic(
    projectTopic: string = (
      document.getElementById('project-topic-input') as HTMLInputElement
    ).value
  ) {
    (document.getElementById('project-topic-input') as HTMLInputElement).value =
      '';

    if (projectTopic) this.projectTopics.add(projectTopic);
  }

  removeProjectTopic(projectTopic: string) {
    this.projectTopics.delete(projectTopic);
  }

  setDifficultyLevel(difficultyLevel: TopicSelector.DifficultyLevel) {
    this.isDropdownMenuShown = false;
    this.difficultyLevel = difficultyLevel;
  }
}
