import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
})
export class MoviesComponent implements OnInit {
  ngOnInit(): void {
    console.log('On --*- Init');
  }
  title = 'Snir elgabsi  mivoesss';
}
