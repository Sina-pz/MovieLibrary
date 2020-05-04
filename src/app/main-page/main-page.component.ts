import { Component, OnInit } from '@angular/core';
import { MockDB } from '../models/mock-db';
import { MovieGroup } from '../models/movie-group';
import { MovieItem } from '../models/movie-item';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {

  }

}
