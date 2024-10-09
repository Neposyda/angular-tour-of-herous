import { Injectable } from '@angular/core';

import { IHero } from '../types/hero.interface';
import { HEROES } from '../const/mock.heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): IHero[] {
    return HEROES;
  }
}
