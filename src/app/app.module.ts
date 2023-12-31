import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BannerCarouselComponent } from './components/banner-carousel/banner-carousel.component';
import { GenrePosterComponent } from './components/genre-poster/genre-poster.component';
import { MovieGenreDirective } from './directives/service-calls/movie-genre.directive';
import { ServiceCallsDirective } from './directives/service-calls/service-calls.directive';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { SearchComponent } from './pages/search/search.component';
import { TvComponent } from './pages/tv/tv.component';
import { MovieApiGenreService } from './service/movie-api-genre.service';
import { MovieApiServiceService } from './service/movie-api-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MovieDetailsComponent,
    ServiceCallsDirective,
    MovieGenreDirective,
    GenrePosterComponent,
    MoviesComponent,
    TvComponent,
    BannerCarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [MovieApiServiceService, MovieApiGenreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
