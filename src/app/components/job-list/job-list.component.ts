import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.sass'],
})
export class JobListComponent implements OnInit, AfterViewInit {
  constructor(private portfolioService: PortfolioService) {}
  @ViewChild('jobListElement', { static: false }) jobListElement: ElementRef;

  public jobList: Array<object> = [];

  ngOnInit(): void {
    this.portfolioService.fetchPortfolioData().subscribe((response) => {
      response.data ? this.jobList.push(...response.data) : this.jobList.push(...response);
    });
  }

  ngAfterViewInit(): void {
    window.addEventListener(
      'wheel',
      (event) => {
        this.captureScroll(event);
      },
      false
    );
  }

  private captureScroll(event) {
    if (window.innerWidth >= 700) {
      event.preventDefault();

      if (event.deltaY) {
        this.jobListElement.nativeElement.scrollLeft += event.deltaY;
      } else if (event.deltaX) {
        this.jobListElement.nativeElement.scrollLeft += -event.deltaX;
      }
    }
  }
}
