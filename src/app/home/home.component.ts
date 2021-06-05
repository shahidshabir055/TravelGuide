import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  compIndex = 4;
  constructor() { }

  ngOnInit(): void {
  }
  onTabClick(index: any): void{
    this.compIndex = index;
  }

}
