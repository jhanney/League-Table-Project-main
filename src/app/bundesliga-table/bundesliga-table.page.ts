import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCard, IonCol, IonCardHeader, IonCardTitle, IonCardContent,IonBackButton,IonButtons,IonSpinner, IonButton, IonItem } from '@ionic/angular/standalone';
import { LeagueService } from '../league.service';
import { ShareService } from '../share.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bundesliga-table',
  templateUrl: './bundesliga-table.page.html',
  styleUrls: ['./bundesliga-table.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,  IonGrid, IonRow, IonCard, IonCol, IonCardHeader, IonCardTitle, IonCardContent,IonBackButton,IonButtons,IonSpinner, IonButton, RouterLink, IonItem]
})
export class BundesligaTablePage implements OnInit {

  constructor(private leagueService: LeagueService,
    private shareService: ShareService) { }

  standings: any[] = []; 
  isLoading: boolean = true; //debugging incase page is not loading
  errorMessage: string = ''; //error message to

  ngOnInit() {
    this.loadStandings(); //load the table
  }

  //calls share service with the name and standings
  shareStandings() {
    this.shareService.shareLeagueStandings('Premier League', this.standings);
  }

  loadStandings(){
    this.isLoading = true; //set to true
    this.errorMessage = ''; 

    //get standings for PL
    this.leagueService.getStandings('BL1').subscribe({
      next: (response) => {
        console.log('Response from API', response); //log API response for debug

        //making sure the data is fecthed
        if(response && response.standings && response.standings.length > 0){
          this.standings = response.standings[0].table;//access the table
        }else {
          this.errorMessage = 'No standings available'; 
        }
        this.isLoading = false; 
      }, 
      error: (error) =>{
        this.errorMessage = 'Failed to load standings, theres been an error'; 
        this.isLoading = false; 
      }
    });
  }

}
