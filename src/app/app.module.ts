import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { SearchComponent } from './components/search/search.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { ListComponent } from './components/list/list.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { DrawerComponent } from './components/drawer/drawer.component';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzSpaceModule } from 'ng-zorro-antd/space';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AutocompleteComponent,
    SearchComponent,
    CarouselComponent,
    ListComponent,
    DrawerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzAutocompleteModule,
    NzButtonModule,
    NzGridModule,
    NzIconModule,
    NzCarouselModule,
    NzListModule,
    NzSkeletonModule,
    NzDrawerModule,
    NzSpaceModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
