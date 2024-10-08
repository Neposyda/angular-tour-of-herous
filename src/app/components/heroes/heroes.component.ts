import { Component } from '@angular/core';
import { NgFor, UpperCasePipe } from '@angular/common';

import { IHero } from './types/hero.interface';
import { HEROES } from './const/mock.heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent {
  heroes: IHero[] = HEROES

  selectedHero?: IHero;

  onSelect(hero: IHero) {
    this.selectedHero = hero;
  }
}
