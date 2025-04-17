import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  private apiUrl = 'https://api.football-data.org/v4/competitions/'; // Base URL for Football Data API

  constructor(private http: HttpClient) {}

  // Fetch league standings by competition ID (PL, PD, SA, BL1, etc.)
  getStandings(competitionId: string): Observable<any> {
    const headers = { 'X-Auth-Token': '1b549516cbe346209b2c648fa4643c66' };  // Replace with your actual API key
    const url = `${this.apiUrl}${competitionId}/standings`;
    return this.http.get<any>(url, { headers });
  }
}
