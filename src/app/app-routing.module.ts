import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },

  {
    component: AboutMeComponent,
    path: 'about',
  },
  {
    component: ResumeComponent,
    path: 'resume'
  },
  {
    component: ProjectsComponent,
    path: 'projects'
  },
  {
    component: ContactComponent,
    path: 'contact'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
