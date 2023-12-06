// Name: Jocelyn Dupuis
// File: app.component.ts
// Date: 12/05/2023
// Description: TS file for app components

//import statements
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
//exports
export class AppComponent {
  assignment: string;

  constructor() {
    this.assignment = 'Welcome To The HufflePuff Loan Application!'
  }
}
