import { Component, OnInit } from '@angular/core';
import { InterestService } from '../services/interest.service';

@Component({
  selector: 'app-mortgage',
  templateUrl: './mortgage.component.html',
  styleUrls: ['./mortgage.component.css']
})
export class MortgageComponent implements OnInit {

  Total: number;
  years: number;

  constructor(private interestservice: InterestService) { }

  calculateinterest(): void {
    this.Total = this.interestservice.calculateinterest(this.years);
  }

  ngOnInit(): void {
  }

}
