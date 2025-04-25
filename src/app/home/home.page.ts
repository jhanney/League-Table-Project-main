
import { IonHeader, IonToolbar, IonTitle, IonCardTitle, IonCardSubtitle, IonButton, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardContent, IonImg, IonLabel, IonSearchbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';  // For navigation
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../league.service';
import { FormsModule } from '@angular/forms'; //for ngModel binding

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonButton, RouterLink, IonCardTitle, IonCardSubtitle, IonTitle, IonContent, CommonModule, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardContent, IonImg, IonLabel, IonSearchbar, FormsModule],
})
export class HomePage {
  leagues =[{ id: 1, name: 'English Premier League', image: 'assets/images/prem-logo2.jpg', country:'England', route: '/premier-league-table' },
    { id: 2, name: 'Bundesliga', image: 'assets/images/bundesliga-logo2.jpg', country: 'Germany', route: '/bundesliga-table' },
    { id: 3, name: 'La Liga', image: 'assets/images/la-liga-logo2.jpg', country: 'Spain', route: '/la-liga-table' },
    { id: 4, name: 'Serie A', image: 'assets/images/serie-a.jpg', country: 'Italy', route: '/serie-a-table' }];
  
    teamSearch: string = ''; 

    plTeams: any[]=[]; //array to store teams

    isLoadingTeams: boolean = false; 

    constructor(private leagueService : LeagueService,private router: Router){ //handles API call
    }

    ngOnInit() {
      // Automatically load Premier League teams when the page initializes
      this.loadPremierLeagueTeams();
    }

    loadPremierLeagueTeams(){
      this.isLoadingTeams = true; 

      //call service to get prem standings
      this.leagueService.getStandings('PL').subscribe({
        next: (response) =>{
          //see if valid data retunred
          if(response?.standings?.[0]?.table){
            //extract team info, mapping through nested structure, makes a new object with simpler str
            this.plTeams = response.standings[0].table.map((item: any) => ({
              id: item.team.id,
              name: item.team.name,
              crest: item.team.crest
            }));
            console.log('Loaded Premier League teams:', this.plTeams);
          }
          this.isLoadingTeams = false;
        }
      })
    }
    
    searchTeam(){
      if(!this.teamSearch.trim()) return; //return if search empty

      //find team , case insesitive
      const foundTeam = this.plTeams.find(team => 
        team.name.toLowerCase().includes(this.teamSearch.toLowerCase())
      );

      if(foundTeam){
        console.log('Found team:', foundTeam);
        //navigate to the team details page
        // state property passes data to the destination route
        this.router.navigate(['/team-details', foundTeam.id], {
          state: { teamData: foundTeam }
        });
      }else {
          // Alert the user if no match is found
          alert('No matching team found. Please try a different search term.');
        }
      }
    }
