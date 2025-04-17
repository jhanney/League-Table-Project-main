import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-la-liga-table',
  templateUrl: './la-liga-table.page.html',
  styleUrls: ['./la-liga-table.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LaLigaTablePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
