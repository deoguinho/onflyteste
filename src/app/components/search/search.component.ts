import {
  Component,
  ViewEncapsulation,
  Output,
  EventEmitter,
} from '@angular/core';
import { Place } from '../../Interfaces/Place';
import data from '../../../assets/place.json';

@Component({
  selector: 'app-search',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @Output() changePlace: EventEmitter<any> = new EventEmitter();

  places: Place[] = data;
  inputValue?: string;
  filteredOptions: string[] = [];
  options: string[] = [];

  botao?: string = 'Buscar';

  ngOnInit(): void {
    console.log(this.places);
    this.places.forEach((element) => {
      this.options.push(`${element.name} - ${element.state.name}`);
    });
  }

  // Auto Complete
  constructor() {
    this.filteredOptions = this.options;
  }
  onChange(value: string): void {
    this.filteredOptions = this.options.filter(
      (option) => option.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
  }

  HandleClick() {
    this.changePlace.emit();
  }

  searchPlaces() {
    this.botao = "Nova Busca";
    this.changePlace.emit(this.inputValue);
  }
  clearInput(){
    this.inputValue = '';
  }
}
