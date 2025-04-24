//injectable decorator from Angular core to mark this class as a service
import { Injectable } from '@angular/core';

//enable cross platfrom sharing 
import { Share } from '@capacitor/share';

@Injectable({
    providedIn: 'root'
  }) 

  export class ShareService {
    constructor() {}
        async shareLeagueStandings(leagueName: string, standings: any[]) {
            //create a text of the standings
            let shareText = `${leagueName} Standings:\n\n`;
            
            if (standings && standings.length > 0) {
              //loops through all of the teams in the table 
              standings.forEach(team => {
                //shows each team's data with position, name, points, and key stats
                shareText += `${team.position}. ${team.team.name} - ${team.points} pts (W: ${team.won}, D: ${team.draw}, L: ${team.lost}, GD: ${team.goalDifference})\n`;
              });
              
              //shows where datas shared from 
              shareText += '\nShared from Football Leagues app';
            }
            
            try {
              //using capacitor share plugin
              await Share.share({
                title: `${leagueName} Standings`, //the title
                text: shareText, //the standings formatted as text
                dialogTitle: 'Share with friends' //the caption
              });
            } catch (error) {
              //log errors if necessary
              console.error('Error sharing:', error);
            }

    }
}
