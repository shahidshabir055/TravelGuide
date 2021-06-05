import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WinterComponent } from './winter/winter.component';
import { SummerComponent } from './summer/summer.component';
import { SpringComponent } from './spring/spring.component';
import { AutumnComponent } from './autumn/autumn.component';
import { MonthlyComponent } from './monthly/monthly.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MonthlyDetailsComponent } from './monthly-details/monthly-details.component';
import { HotelsComponent } from './hotels/hotels.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { MatTableModule } from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './weather.service';
import { StoreModule } from '@ngrx/store';
import { locationReducer } from 'src/locationReducer';
import { ImageSlideComponent } from './image-slide/image-slide.component';
import { MonthlyServiceService } from './monthly-service.service';
import { DirectionMaPComponent } from './direction-ma-p/direction-ma-p.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WinterComponent,
    SummerComponent,
    SpringComponent,
    AutumnComponent,
    MonthlyComponent,
    NavbarComponent,
    MonthlyDetailsComponent,
    HotelsComponent,
    CurrentWeatherComponent,
    ImageSlideComponent,
    DirectionMaPComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    NgbModule,
    MatCarouselModule.forRoot(),
    NgImageSliderModule,
    MatTableModule,
    MatTabsModule,
    HttpClientModule,
    StoreModule.forRoot({
      loc: locationReducer
    }),
  ],
  providers: [WeatherService, MonthlyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
