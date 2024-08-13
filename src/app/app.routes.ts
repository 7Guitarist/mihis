import { HomeFeatureComponent } from './home-feature/home-feature.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FooterComponent } from './footer/footer.component';
import { HomeDonateComponent } from './home-donate/home-donate.component';
import { DonatePageComponent } from './donate-page/donate-page.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { ChartsComponent } from './charts/charts.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page',
  },
  {
    path: 'donate',
    component: DonatePageComponent,
    title: 'Donate Page',
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    title: 'Sign Up Page',
  },
  {
    path: 'users',
    component: UserAccountComponent,
    title: 'Sign Up Page',
  },
  //   {
  //   path: '',
  //   component: HomeComponent,
  //   title: 'Home Page',
  // },
  // {
  //   path: 'my/orders',
  //   component: MyOrdersComponent,
  //   title: 'My Orders Page',
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  //   title: 'Login Page',
  // },
  // {
  //   path: 'admin/products',
  //   component: AdminProductsComponent,
  //   title: 'Admin Products Page',
  // },
  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full',
  // },
  // {
  //   path: '**',
  //   component: AdminOrdersComponent,
  // },
];
