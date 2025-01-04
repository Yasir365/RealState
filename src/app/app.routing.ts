import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'index',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about-us',
    loadComponent: () => import('./about-us/about-us.component').then(m => m.AboutUsComponent)
  },
  {
    path: 'tokenomics',
    loadComponent: () => import('./tokenomics/tokenomics.component').then(m => m.TokenomicsComponent)
  },
  {
    path: 'token-commitment',
    loadComponent: () => import('./token-commitment/token-commitment.component').then(m => m.TokenCommitmentComponent)
  },
  {
    path: 'governance',
    loadComponent: () => import('./governance/governance.component').then(m => m.GovernanceComponent)
  },
  {
    path: 'community',
    loadComponent: () => import('./community/community.component').then(m => m.CommunityComponent)
  },
  {
    path: 'contact-us',
    loadComponent: () => import('./contact-us/contact-us.component').then(m => m.ContactUsComponent)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
