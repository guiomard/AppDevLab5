import { Component, OnInit } from '@angular/core';
import { InterestService } from '../services/interest.service';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent implements OnInit {

  Total: number;
  years: number;

  constructor(private interestservice: InterestService) { }
  
  calculateinterest(): void {
    this.Total = this.interestservice.calculateinterest(this.years);
  }

  ngOnInit(): void {
  }

}
