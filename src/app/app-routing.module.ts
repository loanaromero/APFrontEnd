import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAboutComponent } from './components/about/edit-about.component';
import { EditEducationComponent } from './components/education/edit-education.component';
import { NewEducationComponent } from './components/education/new-education.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { NewExperienceComponent } from './components/experience/new-experience.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditProjectComponent } from './components/projects/edit-project.component';
import { NewProjectComponent } from './components/projects/new-project.component';
import { EditSkillsComponent } from './components/skills/edit-skills.component';
import { NewSkillsComponent } from './components/skills/new-skills.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'newexp', component: NewExperienceComponent},
  {path: 'editexp/:id', component: EditExperienceComponent},
  {path: 'newedu', component: NewEducationComponent},
  {path: 'editedu/:id', component: EditEducationComponent},
  {path: 'newskill', component: NewSkillsComponent},
  {path: 'editskill/:id', component: EditSkillsComponent},
  {path: 'editabout/:id', component: EditAboutComponent},
  {path: 'newpro', component: NewProjectComponent},
  {path: 'editpro/:id', component: EditProjectComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
