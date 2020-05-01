import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-job',
  templateUrl: './single-job.component.html',
  styleUrls: ['./single-job.component.sass'],
})
export class SingleJobComponent implements OnInit {
  @Input() job: any;
  @Input() jobIndex: any;

  constructor() {}

  ngOnInit(): void {
    this.jobIndex = this.jobIndex + 1;
    this.jobIndex < 10 ? (this.jobIndex = '0' + this.jobIndex.toString()) : '';
  }
}
