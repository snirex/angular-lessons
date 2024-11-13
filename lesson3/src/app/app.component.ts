import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lesson3';
  listOfMovies = ['m1','m2','m3'];
  mainChar = 'snir elgabsi';
  shouldBeRed :boolean = true;
  movie = {
    movieName : 'm1-1',
    rating : 9
  };
}
