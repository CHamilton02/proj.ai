import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-topic-selector',
  imports: [CommonModule],
  templateUrl: './topic-selector.component.html',
  styleUrl: './topic-selector.component.scss',
})
export class TopicSelectorComponent {
  isDropdownMenuShown = false;

  toggleDropdownMenu() {
    this.isDropdownMenuShown = !this.isDropdownMenuShown;
  }
}
