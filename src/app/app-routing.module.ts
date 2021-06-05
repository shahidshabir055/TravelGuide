import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MonthlyDetailsComponent } from './monthly-details/monthly-details.component';
import { MonthlyComponent } from './monthly/monthly.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'monthlyDetails', component: MonthlyDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
