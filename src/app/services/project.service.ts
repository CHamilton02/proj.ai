import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { TopicSelector } from '../models/topic-selector';
import { environment } from '../../environments/environment';
import { AnalyticsService } from './analytics.service';

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

  constructor(
    private http: HttpClient,
    private analyticsService: AnalyticsService
  ) {}

  addProjectTopic(projectTopic: string) {
    this.projectTopics.add(projectTopic);
  }

  removeProjectTopic(projectTopic: string) {
    this.projectTopics.delete(projectTopic);
  }

  async generateProject() {
    if (this.isProjectGenerating) {
      return;
    }
    this.isProjectGenerating = true;

    await this.http
      .post(`${this.url}/project/generate`, {
        topics: [...this.projectTopics],
        difficulty: this.difficultyLevel,
      })
      .subscribe((body) => {
        this.generatedProject = body as Project;
        this.isProjectGenerating = false;
        this.analyticsService.trackGenerateProject(
          this.projectTopics,
          this.difficultyLevel,
          this.generatedProject?.title,
          this.generatedProject?.description
        );
      });
  }
}
