import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCard, IonCol, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';
import { LeagueService } from '../league.service';
import { ActivatedRoute } from '@angular/router';
import { RouterLinkWithHref } from '@angular/router';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-premier-league-table',
  templateUrl: './premier-league-table.page.html',
  styleUrls: ['./premier-league-table.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonGrid, IonRow, IonCard, IonCol, IonCardHeader, IonCardTitle]
})
export class PremierLeagueTablePage implements OnInit {

  standings: any[] = []; 

  constructor(private leagueService: LeagueService,
    private route: ActivatedRoute
  ) { }

  
  ngOnInit() {
    // Fetch the standings for the Premier League (PL)
    this.leagueService.getStandings('PL').subscribe(
      (response) => {
        console.log(response);  // Log the full API response for debugging

        // Ensure the standings data is present
        if (response && response.standings && response.standings.length > 0) {
          this.standings = response.standings[0].table;  // Access the table array containing the team standings
        }
      },
      (error) => {
        console.error('Error fetching standings:', error);  // Handle any errors
      }
    );
  }

}
