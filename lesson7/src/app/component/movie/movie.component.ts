//lesson 7b
import { Component, Input } from '@angular/core';
import { IMovie } from '../../models/movie.interface';
import { MovieType } from '../../models/movietype.enum';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent {
  constructor(){}
  get movieTypeEnum(){
    return MovieType;
  }
  @Input() movie!: IMovie;
}
