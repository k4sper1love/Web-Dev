import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';
import { CompanyService } from './company.service';
import { VacancyService } from './vacancy.service';

@NgModule({
    imports: [
      BrowserModule,
      HttpClientModule,
      ReactiveFormsModule,
      RouterModule.forRoot([
        { path: '', component: CompanyListComponent },
        { path: 'companies/:companyId/vacancies', component: VacancyListComponent}
      ])
    ],
    declarations: [
      AppComponent,
      CompanyListComponent,
      VacancyListComponent
    ],
    providers: [
      CompanyService,
      VacancyService
    ],
    bootstrap: [
      AppComponent
    ]
})
export class AppModule { }
