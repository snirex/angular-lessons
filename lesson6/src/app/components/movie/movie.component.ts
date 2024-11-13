import { Component } from '@angular/core';
export interface IMovie {
  name: string;
  mainChar: string;
  rating: number;
  releaseDate: Date;
}
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss',
})
export class MovieComponent {
  constructor() {}
  public movie: IMovie = {
    name: 'snir',
    mainChar: 'snir elgabsi',
    rating: 7.1,
    releaseDate: new Date(),
  };
  public changeMovie(event: Event): void {
    //debugger;
    this.movie = {
      name: 'Captain Marvel',
      mainChar: 'Carol Denvers',
      rating: 8.5,
      releaseDate: new Date(),
    };
  }
}
