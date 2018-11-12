// @Component is a decorator function that specifies the Angular metadata for the component.
/* The CLI generated three metadata properties:

selector— the component's CSS element selector
templateUrl— the location of the component's template file.
styleUrls— the location of the component's private CSS styles. */

import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; //imports hero.ts
import { HeroService } from '../hero.service';
//import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes', //matches the name of the HTML element that ids this component win a parent component
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit { //always export class so you can use in other place
  heroes: Hero[];
 
  constructor(private heroService: HeroService) { }

  ngOnInit() { //lifecycle hook called when creating a component place to put initialization logic
    this.getHeroes();
  }

  getHeroes(): void {
   this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
