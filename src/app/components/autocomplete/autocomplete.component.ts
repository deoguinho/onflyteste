import { Component, ViewEncapsulation } from '@angular/core';
import { Place } from '../../Interfaces/Place';
import data from '../../../assets/place.json';
@Component({
  selector: 'app-autocomplete',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
})
export class AutocompleteComponent {
  places: Place[] = data;

  inputValue?: string;
  filteredOptions: string[] = [];
  options: string[] = [];

  ngOnInit(): void {
    console.log(this.places);
    this.places.forEach((element) => {
      this.options.push(element.name);
    });
  }

  constructor() {
    this.filteredOptions = this.options;
  }
  onChange(value: string): void {
    this.filteredOptions = this.options.filter(
      (option) => option.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
  }
}
