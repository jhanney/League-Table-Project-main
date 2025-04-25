import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonCard, IonCardContent, IonButton, IonItem, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { LeagueService } from '../league.service';
import { Storage } from '@ionic/storage-angular';//import storage


@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.page.html',
  styleUrls: ['./team-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink, IonBackButton, IonButtons, IonCard, IonCardContent, IonButton, IonItem, IonIcon, IonLabel ]
})
export class TeamDetailsPage implements OnInit {

  teamData: any;
  teamDetails: any;
  teamId: string = '';
  isLoading: boolean = true;
  errorMessage: string = '';
  isFavourite = false; 

  constructor(private router: Router,
    private route: ActivatedRoute, //injecting this allows us to acces values from the URL, in this case team ID
    private leagueService: LeagueService, private storage: Storage) {
      this.initStorage(); 
     }

  async initStorage(){
    await this.storage.create();
  }

  ngOnInit() {
    //get the team ID from route URL params, gives current state of route, then gets ID from URL
    this.teamId = this.route.snapshot.paramMap.get('id') || '';
    
    //?, is a typescript feature that helps prevent "cannot read property of undefined" errors
    //get the team standing data from router state
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.teamData = navigation.extras.state['teamData'];
    }
    
    this.loadTeamDetails();
  }
 
  async checkIfFavourite(){
     //get favourites away from storage
     const favourites = await this.storage.get('favoriteTeams') || [];

      // Check if current team is in favorites
    this.isFavourite = favourites.some((team: any) => team.id === this.teamId);
  }

  async toggleFavourite(){
    //fetch current favourites
    let favourites = await this.storage.get('favouriteTeams') || []; 

    if (this.isFavourite){
      //remove if already there
      favourites = favourites.filter((team: any) => team.id !==this.teamId);
      console.log('Removed from favourites');
    } else {
      // Add to favorites
      const teamToAdd = {
        id: this.teamId,
        name: this.teamData?.team?.name || this.teamDetails?.name,
        crest: this.teamData?.team?.crest || this.teamDetails?.crest
      };
      favourites.push(teamToAdd);
      console.log('Added to favorites');
    }
    // Save updated favorites to storage
    await this.storage.set('favoriteTeams', favourites);
    
    // Update local state
    this.isFavourite = !this.isFavourite;
  }

  loadTeamDetails() {
    this.isLoading = true;
    
    //cals service to get team details using the id
    this.leagueService.getTeamDetails(this.teamId).subscribe({
      next: (response) => {
        this.teamDetails = response;
        this.isLoading = false;
      },
      //when request fails
      error: (error) => {
        this.errorMessage = 'Failed to load team details';
        this.isLoading = false;
      }
    });
  }
}
