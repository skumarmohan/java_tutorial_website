import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        loadComponent: () => import('./features/home/home').then((m) => m.Home),
        title: 'JavaLearn — Learn Java for Free',
      },
      {
        path: 'java',
        redirectTo: 'java/introduction',
        pathMatch: 'full',
      },
      {
        path: 'java/:slug',
        loadComponent: () =>
          import('./features/java-tutorial/pages/lesson-page/lesson-page').then((m) => m.LessonPage),
      },
      {
        path: '**',
        loadComponent: () => import('./features/not-found/not-found').then((m) => m.NotFound),
      },
    ],
  },
];
