import { Directive } from '@angular/core';
import { MovieApiGenreService } from 'src/app/service/movie-api-genre.service';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { MovieGenreDirective } from './movie-genre.directive';

@Directive({
  selector: '[appServiceCalls]',
})
export class ServiceCallsDirective extends MovieGenreDirective {
  bannerResult: any = [];
  trendingMovieResult: any = [];
  trendingTvResult: any = [];

  constructor(
    movieService: MovieApiServiceService,
    genreService: MovieApiGenreService
  ) {
    super(movieService, genreService);
  }
  bannerData() {
    this.movieService.bannerApiData().subscribe((data) => {
      this.bannerResult = data.results;
    });
  }

  trendingMovies() {
    this.movieService.trendingMovies().subscribe((data) => {
      this.trendingMovieResult = data.results;
    });
  }

  trendingTv() {
    this.movieService.trendingTv().subscribe((data) => {
      this.trendingTvResult = data.results;
    });
  }
}
