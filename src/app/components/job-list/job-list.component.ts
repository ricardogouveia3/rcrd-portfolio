import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.sass'],
})
export class JobListComponent implements OnInit {
  constructor(private portfolioService: PortfolioService) {}
  private jobList: Array<object> = [];

  ngOnInit(): void {
    this.portfolioService.getPortfolioData().subscribe((data) => {
      this.jobList.push(...data);
    });
  }
}
