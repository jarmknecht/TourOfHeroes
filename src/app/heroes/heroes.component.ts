// @Component is a decorator function that specifies the Angular metadata for the component.
/* The CLI generated three metadata properties:

selector— the component's CSS element selector
templateUrl— the location of the component's template file.
styleUrls— the location of the component's private CSS styles. */

import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; //imports hero.ts

@Component({
  selector: 'app-heroes', //matches the name of the HTML element that ids this component win a parent component
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit { //always export class so you can use in other places
  
  hero: Hero = { //hero is now an object
  	id: 1,
  	name: 'Windstorm'
  };

  constructor() { }

  ngOnInit() { //lifecycle hook called when creating a component place to put initialization logic
  }

}
