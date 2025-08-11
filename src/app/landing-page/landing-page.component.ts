import { Component } from '@angular/core';
import { faGithub, faLinkedin, faAngular, faReact, faNodeJs, faHtml5, faCss3Alt, faJava, faPython } from '@fortawesome/free-brands-svg-icons';
import { faHome, faCode, faTools } from '@fortawesome/free-solid-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { openPDF } from '../utils/openPdf.utils';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faAngular = faAngular;
  faReact = faReact;
  faNodeJs = faNodeJs;
  faHome = faHome;
  faCode = faCode;
  faTools = faTools;
  faHtml5 = faHtml5
  faCss3Alt = faCss3Alt
  faJava = faJava
  faPython = faPython
  faDatabase = faDatabase

  visualizeResume() {
    openPDF();
  }
}
