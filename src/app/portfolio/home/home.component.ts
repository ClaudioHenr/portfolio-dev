import { Component } from '@angular/core';
import { FooterComponent } from '../../layout/footer/footer.component';
import { NavComponent } from '../../layout/nav/nav.component';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    FontAwesomeModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  faGithub = faGithub
  faLinkedin = faLinkedin
  faInstagram = faInstagram
}
