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
  projectTopics = new Set([
    'Web Development',
    'Embedded Systems',
    'Mobile App',
  ]);
  isDropdownMenuShown = false;
  DifficultyLevel = TopicSelector.DifficultyLevel;
  difficultyLevel: TopicSelector.DifficultyLevel =
    TopicSelector.DifficultyLevel.Undefined;

  toggleDropdownMenu() {
    this.isDropdownMenuShown = !this.isDropdownMenuShown;
  }

  addProjectTopic() {
    const topic = (
      document.getElementById('project-topic-input') as HTMLInputElement
    ).value;

    (document.getElementById('project-topic-input') as HTMLInputElement).value =
      '';

    if (topic) this.projectTopics.add(topic);
  }

  removeProjectTopic(projectTopic: string) {
    this.projectTopics.delete(projectTopic);
  }

  setDifficultyLevel(difficultyLevel: TopicSelector.DifficultyLevel) {
    this.isDropdownMenuShown = false;
    this.difficultyLevel = difficultyLevel;
  }
}
