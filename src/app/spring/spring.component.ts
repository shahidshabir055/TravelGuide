import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spring',
  templateUrl: './spring.component.html',
  styleUrls: ['./spring.component.css']
})
export class SpringComponent implements OnInit {
  places = [
    {
      name: 'Gulmarg',
      state: 'Jammu and Kashmir, India',
      pic: 'assets/winter/gulmarg.jpg',
      description: 'It is a pristine meadow and is known as the skiing destination of India',
    },
    {
      name: 'Manali',
      state: 'Punjab, India',
      pic: 'assets/winter/manali.jpg',
      description: 'It has a reputation as a backpacking center and honeymoon destination',
    },
    {
      name: 'Andaman',
      state: 'Andaman Nicobar Islands',
      pic: 'assets/winter/andaman.jpg',
      description: 'Arrive here and witness the cave beach and surreal light and sound show',
    },
    {
      name: 'Munnar',
      state: 'Kerala, India',
      pic: 'assets/winter/munnar.jpg',
      description: 'It has a lot in store, you can go to trekking, fishing and even rock climbing',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
