import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trendingMovies:any[] = [];
  trendingTV:any[] = [];
  trendingPeople:any[] = [];
  imgPrefix:string = "https://image.tmdb.org/t/p/w500";
  constructor(private _MoviesService:MoviesService) { }

  ngOnInit(): void {

    this._MoviesService.getTrending('movie').subscribe((response)=>
    {
      this.trendingMovies = response.results.slice(0,10);
    })
    this._MoviesService.getTrending('tv').subscribe((response)=>
    {
      this.trendingTV = response.results.slice(0,10);
    })
    this._MoviesService.getTrending('people').subscribe((response)=>
    {
      this.trendingPeople = response.results.slice(0,10);
    })
  }

}
