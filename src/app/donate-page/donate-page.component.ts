import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-donate-page',
  standalone: true,
  imports: [RouterLink, FooterComponent],
  templateUrl: './donate-page.component.html',
  styleUrl: './donate-page.component.css',
})
export class DonatePageComponent {}
