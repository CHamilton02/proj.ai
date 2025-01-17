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

  constructor(private http: HttpClient) {}

  async generateProject(topics: Array<string>, difficulty: string) {
    this.generatingProject = true;
    await this.http
      .post(`${this.url}/project/generate`, { topics, difficulty })
      .subscribe((body) => {
        this.generatedProject = body as Project;
        this.generatingProject = false;
      });
  }
}
