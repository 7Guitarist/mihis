import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { HomeBannerComponent } from '../home-banner/home-banner.component';
import { HomeFeatureComponent } from '../home-feature/home-feature.component';
import { HomeDonateComponent } from '../home-donate/home-donate.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeBannerComponent,
    HomeFeatureComponent,
    HomeDonateComponent,
    FooterComponent,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
