import { Component, Input } from '@angular/core';

import { Hotel } from '../../Interfaces/Hotel';
import data from '../../../assets/hotel.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @Input() name: string = '';
  Allhoteis: Hotel[] = [];
  hoteis: Hotel[] = [];
  count: number = 10;

  mountHoltes(): void {
    let objc: any = [];
    data.map((item) => {
      item.hotels.map((i) => {
        objc.push(i);
      });
    });
    this.hoteis = objc;
    this.Allhoteis = objc;
  }

  ngOnInit(): void {
    this.mountHoltes();
  }

  onChangePlace(input: string): void {
    const place = input.split(' -');
    this.hoteis = this.Allhoteis.filter((moment) => {
      return moment.address.city.toLowerCase().includes(place[0].toLowerCase());
    });
  }
  loadMore() {
    console.log('to aqui');
    this.count = this.count + 10;
  }


}
