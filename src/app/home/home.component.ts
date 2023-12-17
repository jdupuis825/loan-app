// Name: Jocelyn Dupuis
// File: contact.component.ts
// Date: 12/06/2023
// Description: TS file for contact component

//import statements
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
//exports
export class HomeComponent implements OnInit {

  //Variables created
  loanForm: FormGroup;
  loanAmount: number;
  interestRate: number;
  numberOfYears: number;
  payment: number;
  interest: number;

  //Constructor with form builder parameter
  constructor(private fb: FormBuilder) {

   }

  //Initialize loan form 
  ngOnInit(): void {
    this.loanForm = this.fb.group({ loanAmount: ['', Validators.required ], interestRate: ['', Validators.required], years: ['', Validators.required]});
  }

  //Call get to return form controls
  get form(){return this.loanForm.controls}

  //Function to calculate monthly loan payment with interest
  calculateLoan(loanAmount: number, interestRate: number, numberOfYears: number){
    //Calculates interest number of loan payments
    let interest = interestRate / 100 / 12;
    let payments = numberOfYears * 12;
    //Calculates monthly payment
    let x = Math.pow(1 + interest, payments);
    let unroundedPayment = (loanAmount*x*interest)/(x-1);

    //Displays monthly payment in two decimal form
    this.payment = parseFloat(unroundedPayment.toFixed(2))
    //Calculates total loan with interest
    let total = this.payment * payments;
    //Calculates interest amount in two decimal form
    this.interest = parseFloat((total - loanAmount).toFixed(2));
  }
}
