import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IHero } from '../types/hero.interface';
import { HEROES } from '../const/mock.heroes';
import { MessageService } from '../../messages/services/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private readonly messageService: MessageService
  ) { }

  getHeroes(): Observable<IHero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<IHero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
