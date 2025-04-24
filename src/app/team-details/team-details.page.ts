import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonCard, IonCardContent } from '@ionic/angular/standalone';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { LeagueService } from '../league.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.page.html',
  styleUrls: ['./team-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink, IonBackButton, IonButtons, IonCard, IonCardContent ]
})
export class TeamDetailsPage implements OnInit {

  teamData: any;
  teamDetails: any;
  teamId: string = '';
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(private router: Router,
    private route: ActivatedRoute, //injecting this allows us to acces values from the URL, in this case team ID
    private leagueService: LeagueService) { }

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
