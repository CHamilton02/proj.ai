import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from './project';
import { TopicSelector } from './topic-selector';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  url = environment.backendUrl;
  generatedProject: Project | undefined;
  isProjectGenerating: boolean = false;
  defaultProjectTopics = [
    'Web Development',
    'Embedded Systems',
    'Mobile App',
    'Artificial Intelligence',
  ];
  projectTopics: Set<string> = new Set();
  difficultyLevel: TopicSelector.DifficultyLevel =
    TopicSelector.DifficultyLevel.Undefined;

  constructor(private http: HttpClient) {}

  addProjectTopic(projectTopic: string) {
    this.projectTopics.add(projectTopic);
  }

  removeProjectTopic(projectTopic: string) {
    this.projectTopics.delete(projectTopic);
  }

  async generateProject() {
    this.isProjectGenerating = true;

    await this.http
      .post(`${this.url}/project/generate`, {
        topics: [...this.projectTopics],
        difficulty: this.difficultyLevel,
      })
      .subscribe((body) => {
        this.generatedProject = body as Project;
        this.isProjectGenerating = false;
      });

    console.log(this.generatedProject);
  }
}
