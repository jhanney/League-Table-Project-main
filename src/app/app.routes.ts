import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'premier-league-table',
    loadComponent: () => import('./premier-league-table/premier-league-table.page').then( m => m.PremierLeagueTablePage)
  },
  {
    path: 'bundesliga-table',
    loadComponent: () => import('./bundesliga-table/bundesliga-table.page').then( m => m.BundesligaTablePage)
  },
  {
    path: 'la-liga-table',
    loadComponent: () => import('./la-liga-table/la-liga-table.page').then( m => m.LaLigaTablePage)
  },
  {
    path: 'serie-a-table',
    loadComponent: () => import('./serie-a-table/serie-a-table.page').then( m => m.SerieATablePage)
  },
  {
    path: 'team-details/:id',
    loadComponent: () => import('./team-details/team-details.page').then( m => m.TeamDetailsPage)
  },
 
];
