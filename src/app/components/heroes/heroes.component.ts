import { Component } from '@angular/core';
import { NgFor, UpperCasePipe } from '@angular/common';

import { IHero } from './types/hero.interface';
import { HEROES } from './const/mock.heroes';
import { HeroService } from './services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent {
  heroes: IHero[] = []

  selectedHero?: IHero;

  constructor(
    private readonly heroService: HeroService
  ) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: IHero) {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
