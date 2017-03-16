import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';
// import { RouterModule, ActivatedRoute, Params }   from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl:  './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes : Hero[];
  selectedHero : Hero;

 ngOnInit(): void {
   this.getHeroes();
}

constructor(
    private router:  Router ,
    private heroService: HeroService) { }

getHeroes(): void {
   // this.heroes = this.heroService.getHeroes();
   this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

gotoDetail(): void {
  this.router.navigate(['/detail', this.selectedHero.id]);
}

}
