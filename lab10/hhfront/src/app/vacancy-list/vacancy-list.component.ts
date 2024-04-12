import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../vacancy';
import { ActivatedRoute } from '@angular/router';
import { VacancyService } from '../vacancy.service';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrl: './vacancy-list.component.css'
})
export class VacancyListComponent {
  vacancies: Vacancy[] = [];
  companyId: number = 0;
  constructor(private vacancyService: VacancyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.companyId = Number(routeParams.get('companyId'));
    this.getVacancies()
  }

  getVacancies(): void {
    this.vacancyService.getVacanciesByCompanyId(this.companyId).subscribe(vacancies => {
      this.vacancies = vacancies
    })
  }
}
