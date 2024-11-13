//lesson 7b
import { Component } from '@angular/core';
import { IMovie } from '../../models/movie.interface';
import { MovieType } from '../../models/movietype.enum';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
})
export class MoviesComponent {
  title = 'lesson 7 - MoviesComponent Works!';
  public listOfMovies: IMovie[] = [
    {
      name: 'Captain America',
      mainChar: 'Steve Rogers',
      rating: 7.1,
      releaseDate: new Date(),
      type: MovieType.Action,
    },
    {
      name: 'SpiderMan',
      mainChar: 'Peter Parker',
      rating: 8.2,
      releaseDate: new Date(2018,11,20),
      type: MovieType.Drama,
    },
    {
      name: 'Guardian Of Galaxy',
      mainChar: 'Gal Gadot',
      rating: 9.1,
      releaseDate: new Date(2025,1,1),
      type: MovieType.Drama,
    },
  ];
}
