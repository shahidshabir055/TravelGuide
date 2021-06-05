import { Component, OnInit } from '@angular/core';
import { MonthlyServiceService } from '../monthly-service.service';
import { WeatherService } from '../weather.service';
import { trigger, transition, animate, style } from '@angular/animations';


@Component({
  selector: 'app-monthly-details',
  templateUrl: './monthly-details.component.html',
  styleUrls: ['./monthly-details.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
      transition('* => void', [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]),
    ])
  ]
})
export class MonthlyDetailsComponent implements OnInit {
  currentWeather: any = {};
  msg!: string;
  loc!: string;
  indexValue!: number;
  current = 0;
  destinations = [
    {
      id : 0,
      name: 'Srinagar',
      description : `Kashmir is not just a place but an emotion that every person wants to experience.
                    The surreal beauty of this gorgeous paradise has been defined by several poets, authors and philosophers.
                    The beauty of the Kashmir Valley is beyond description but yet many celebrities have tried to quote beauty of Kashmir in words`,
      images : ['assets/winter/gulmarg.jpg',
      'assets/bg2.jpg',
      'assets/bg1.jpg',
      'assets/winter/munnar.jpg',
      ],
    },
    {
      id : 1,
      name: 'Manali',
      description : `Kashmir is not just a place but an emotion that every person wants to experience.
                    The surreal beauty of this gorgeous paradise has been defined by several poets, authors and philosophers.
                    The beauty of the Kashmir Valley is beyond description but yet many celebrities have tried to quote beauty of Kashmir in words`,
      images : ['assets/winter/gulmarg.jpg',
      'assets/bg2.jpg',
      'assets/bg1.jpg',
      'assets/winter/munnar.jpg',
      ],
    },
    {
      id : 2,
      name: 'Andaman',
      description : `Kashmir is not just a place but an emotion that every person wants to experience.
                    The surreal beauty of this gorgeous paradise has been defined by several poets, authors and philosophers.
                    The beauty of the Kashmir Valley is beyond description but yet many celebrities have tried to quote beauty of Kashmir in words`,
      images : ['assets/winter/gulmarg.jpg',
      'assets/bg2.jpg',
      'assets/bg1.jpg',
      'assets/winter/munnar.jpg',
      ],
    },
    {
      id : 3,
      name: 'Munnar',
      description : `Kashmir is not just a place but an emotion that every person wants to experience.
                    The surreal beauty of this gorgeous paradise has been defined by several poets, authors and philosophers.
                    The beauty of the Kashmir Valley is beyond description but yet many celebrities have tried to quote beauty of Kashmir in words`,
      images : ['assets/winter/gulmarg.jpg',
      'assets/bg2.jpg',
      'assets/bg1.jpg',
      'assets/winter/munnar.jpg',
      ],
    }
  ];
  constructor(private monthlyService: MonthlyServiceService, private weatherService: WeatherService) {
    this.getIndex();
    this.searchWeather(this.loc);

  }
  isReadMore = true;
  ngOnInit(): void {
    setInterval(() => {
      this.current = ++this.current % this.destinations[this.indexValue].images.length;
    }, 2000);
  }
  showText(): void {
     this.isReadMore = !this.isReadMore;
  }
  searchWeather(loc: string): void {
    this.msg = '';
    this.currentWeather = {};
    this.weatherService.getCurrentWeather(this.loc)
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
  getIndex(): void{
    this.indexValue = this.monthlyService.getIndex();
    this.destinations.forEach(element => {
      if (element.id === this.monthlyService.getIndex()){
        this.loc = element.name;
      }
    });
  }
}
