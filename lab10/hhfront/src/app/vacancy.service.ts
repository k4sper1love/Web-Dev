import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vacancy } from './vacancy';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  private apiUrl = 'http://localhost:8000/';
  constructor(private http: HttpClient) { }

  getVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(this.apiUrl);
  }

  getVacancy(vacancyId: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.apiUrl}/vacancies/${vacancyId}`);
  }

  getVacanciesByCompanyId(companyId: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.apiUrl}/companies/${companyId}/vacancies/`);
  }

  getTopTenVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.apiUrl}/top-ten/`)
  }
}
