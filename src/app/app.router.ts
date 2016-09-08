import { ModuleWithProviders, Component }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoverComponent }      from './cover/cover.component';
import { DevComponent }  from './dev/dev.component';
import { ResumeComponent } from './resume/resume.component'

const appRoutes: Routes = [
  {
    path: 'heroes',
    component: CoverComponent
  },
    {
    path: '',
    component: DevComponent
  },
    {
    path: 'resume',
    component: ResumeComponent
  },
    {
    path: 'curriculo',
    component: ResumeComponent
  },
    {
    path: 'vitae',
    component: ResumeComponent
  }
];

export const router: ModuleWithProviders = RouterModule.forRoot(appRoutes);