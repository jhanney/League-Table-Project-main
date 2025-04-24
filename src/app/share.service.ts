//injectable decorator from Angular core to mark this class as a service
import { Injectable } from '@angular/core';

//enable cross platfrom sharing 
import { Share } from '@capacitor/share';

@Injectable({
    providedIn: 'root'
  }) 

  export class ShareService {
    constructor() {}

