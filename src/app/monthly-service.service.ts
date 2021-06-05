import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonthlyServiceService {
  index!: number;
  constructor() { }
  setIndex(ind: number): void{
    this.index = ind;
  }
  getIndex(): number{
    return this.index;
  }
}
