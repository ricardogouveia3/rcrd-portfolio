import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  constructor(private http: HttpClient) {}

  public fetchPortfolioData(): Observable<any> {
    return this.getPortfolioData.pipe(
      catchError(() => {
        console.error('Failed to fetch portfolio data. Using backup JSON');
        return this.getBackupPortfolioData;
      })
    );
  }

  get getPortfolioData(): Observable<any> {
    return this.http
      .get('https://api.rcrd.dev/portfolio');
  }

  get getBackupPortfolioData(): Observable<any> {
    return this.http
      .get('data/backup-portfolio.json');
  }
}
