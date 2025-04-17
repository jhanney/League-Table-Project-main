import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-bundesliga-table',
  templateUrl: './bundesliga-table.page.html',
  styleUrls: ['./bundesliga-table.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class BundesligaTablePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
