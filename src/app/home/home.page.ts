
import { IonHeader, IonToolbar, IonTitle, IonCardTitle, IonCardSubtitle, IonButton, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardContent, IonImg, IonLabel } from '@ionic/angular/standalone';
import { Router } from '@angular/router';  // For navigation
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../league.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonButton, RouterLink, IonCardTitle, IonCardSubtitle, IonTitle, IonContent, CommonModule, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardContent, IonImg, IonLabel],
})
export class HomePage {
  leagues =[{ id: 1, name: 'English Premier League', image: 'assets/images/premier-league.png', country:'England', route: '/premier-league-table' },
    { id: 2, name: 'Bundesliga', image: 'assets/images/bundesliga.png', country: 'Germany', route: '/bundesliga-table' },
    { id: 3, name: 'La Liga', image: 'assets/images/la-liga.png', country: 'Spain', route: '/la-liga-table' },
    { id: 4, name: 'Serie A', image: 'assets/images/serie-a.jpg', country: 'Italy', route: '/serie-a-table' }];
  

 
}
