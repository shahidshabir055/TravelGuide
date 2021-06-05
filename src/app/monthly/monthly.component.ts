import { Component, OnInit } from '@angular/core';
import { MonthlyServiceService } from '../monthly-service.service';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.css']
})
export class MonthlyComponent implements OnInit {
  // bgImg = 'assets/bg1.jpg';
  places = [
    {
      name: 'Kashmir',
      state: 'Jammu and Kashmir, India',
      price: 'Starts at 14999',
      pic: 'assets/winter/gulmarg.jpg',
      description: 'It is a pristine meadow and is known as the skiing destination of India',
    },
    {
      name: 'Manali',
      state: 'Punjab, India',
      price: 'Starts at 10999',
      pic: 'assets/winter/manali.jpg',
      description: 'It has a reputation as a backpacking center and honeymoon destination',
    },
    {
      name: 'Andaman',
      state: 'Andaman Nicobar Islands',
      price: 'Starts at 11999',
      pic: 'assets/winter/andaman.jpg',
      description: 'Arrive here and witness the cave beach and surreal light and sound show',
    },
    {
      name: 'Munnar',
      state: 'Kerala, India',
      price: 'Starts at 15499',
      pic: 'assets/winter/munnar.jpg',
      description: 'It has a lot in store, you can go to trekking, fishing and even rock climbing',
    },
  ];

  indexValue!: number;
  constructor(private service: MonthlyServiceService) { }

  ngOnInit(): void {
  }
  getUrl(): string{
    return 'url("assets/bg2.jpg")';
  }
  setIndex(val: number): void{
    this.service.setIndex(val);
  }
  getIndex(): void{
    this.indexValue = this.service.getIndex();
  }

}
