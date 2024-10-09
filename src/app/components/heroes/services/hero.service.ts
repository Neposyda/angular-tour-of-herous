import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IHero } from '../types/hero.interface';
import { HEROES } from '../const/mock.heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<IHero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
