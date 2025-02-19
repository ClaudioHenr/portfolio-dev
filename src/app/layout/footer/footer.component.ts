import { Component } from '@angular/core';
import { openPDF } from '../../utils/openPdf.utils';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {


  visualizeResume() {
    openPDF();
  }
}
