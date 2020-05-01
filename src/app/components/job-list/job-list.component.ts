import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ContentChild,
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
    this.portfolioService.getPortfolioData().subscribe((data) => {
      this.jobList.push(...data);
    });
  }

  ngAfterViewInit(): void {
    window.addEventListener('wheel', this.captureScroll, false);
    console.log(this.jobListElement);
  }

  private captureScroll(event) {
    if (window.innerWidth >= 700) {
      event.preventDefault();

      if (event.deltaY < 0) {
        console.log('scrolling up ' + event.deltaY + ' pixels');
      } else if (event.deltaY > 0) {
        console.log('scrolling down ' + event.deltaY + ' pixels');
        console.log(this.jobListElement);
        // this.jobListElement.nativeElement.scrollRight = event.deltaY;
        // console.log(this.jobListElement);
      }
    }
  }
}
