import { Component } from '@angular/core';
import { faAngular, faReact, faHtml5, faCss3Alt, faJava, faPython } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  faAngular = faAngular
  faReact = faReact
  faHtml5 = faHtml5
  faCss3Alt = faCss3Alt
  faJava = faJava
  faPython = faPython
  faDatabase = faDatabase
}
