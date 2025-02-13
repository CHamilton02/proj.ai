import { Injectable } from '@angular/core';

declare let gtag: any;

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  trackGenerateProject(
    topics: Set<string>,
    difficulty: string,
    projectTitle: string,
    projectDescription: string
  ) {
    gtag('event', 'generate project', {
      topics: Array.from(topics).join(','),
      difficulty: difficulty,
      project_title: projectTitle,
      project_description: projectDescription,
    });
  }
}
