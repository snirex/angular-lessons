import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
})
export class MoviesComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  @Input() listOfMovies: string[] = [];
  ngAfterViewInit(): void {
    console.log('after view init');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('on-simple-changes:');
    console.log(changes);
  }
  ngOnInit(): void {
    console.log('on init');
  }
  ngOnDestroy(): void {
    console.log("on destroy");
  }
}
