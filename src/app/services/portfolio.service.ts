import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  constructor(private http: HttpClient) {}

  public getPortfolioData(): Observable<any> {
    return this.http.get('https://api.rcrd.dev/portfolio');
  }
}
