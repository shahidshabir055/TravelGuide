import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  loc$: Observable<string>;
  loc = '';
  currentWeather: any =  {};
  msg = '';
  res = '';
  constructor(private store: Store<any>, private weatherService: WeatherService) {
      this.loc$ = store.pipe(select('loc'));
      this.loc$.subscribe(loc => {
      this.loc = loc;
      this.searchWeather(loc);
    });
   }

  ngOnInit(): void {
  }
  searchWeather(loc: string): void {
    this.msg = '';
    this.currentWeather = {};
    this.weatherService.getCurrentWeather('srinagar')
      .subscribe((res: any) => {
        this.currentWeather = res;
      }, (err: any) => {
        if (err.error && err.error.message) {
          // alert(err.error.message);
          this.msg = err.error.message;
          return;
        }
      }, () => {
});
  }
  resultFound(): any {
    return Object.keys(this.currentWeather).length > 0;
  }

}
