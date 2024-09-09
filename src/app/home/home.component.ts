import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ContactModalComponent } from '../contact-modal/contact-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  @ViewChild('contactModal') contactModal!: ContactModalComponent;

  constructor(private router: Router) {}

  navigateToAbout() {
    this.router.navigate(['/about']);
  }

  navigateToGames() {
    this.router.navigate(['/games']);
  }


  openContactModal() {
    this.contactModal.openModal();
  }

  pdfUrl = 'assets/CV_ENG.pdf';
}
