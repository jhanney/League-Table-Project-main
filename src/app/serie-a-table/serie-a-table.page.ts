import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCard, IonCol, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-serie-a-table',
  templateUrl: './serie-a-table.page.html',
  styleUrls: ['./serie-a-table.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonGrid, IonRow, IonCard, IonCol, IonCardHeader, IonCardTitle]
})
export class SerieATablePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
