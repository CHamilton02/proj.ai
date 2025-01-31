import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  url = 'http://localhost:8080';
  generatedProject: Project | undefined;
  generatingProject: boolean = false;
  defaultProjectTopics = [
    'Web Development',
    'Embedded Systems',
    'Mobile App',
    'Artificial Intelligence',
  ];
  projectTopics: Set<string> = new Set();

  constructor(private http: HttpClient) {}

  addProjectTopic(projectTopic: string) {
    this.projectTopics.add(projectTopic);
  }

  removeProjectTopic(projectTopic: string) {
    this.projectTopics.delete(projectTopic);
  }

  async generateProject(difficulty: string) {
    this.generatingProject = true;
    await this.http
      .post(`${this.url}/project/generate`, {
        topics: this.projectTopics,
        difficulty,
      })
      .subscribe((body) => {
        this.generatedProject = body as Project;
        this.generatingProject = false;
      });
  }
}
