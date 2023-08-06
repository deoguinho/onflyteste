import { Interpolation } from '@angular/compiler';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css'],
})
export class DrawerComponent {
  @Input() hotelArray: any = {};

  visible = false;
  size: 'large' | 'default' = 'default';

  get title(): string {
    return this.hotelArray.name;
  }

  showDefault(): void {
    this.size = 'default';
    this.open();
    console.log(this.hotelArray);
  }

  showLarge(): void {
    this.size = 'large';
    this.open();
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
