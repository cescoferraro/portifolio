import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoverComponent }      from './components/cover/cover.component';
import { DevComponent }  from './pages/dev/dev.component';
import { ResumeComponent } from './components/resume/resume.component';
import { EngComponent } from './pages/eng/eng.component';

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
  },
    {
    path: 'eng',
    component: EngComponent
  }
];

export const router: ModuleWithProviders = RouterModule.forRoot(appRoutes);

