import { Component } from '@angular/core';
import { NgFor, UpperCasePipe } from '@angular/common';

import { IHero } from './types/hero.interface';
import { HEROES } from './const/mock.heroes';
import { HeroService } from './services/hero.service';
import { MessageService } from '../messages/services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent {
  heroes: IHero[] = []

  selectedHero?: IHero;

  constructor(
    private readonly heroService: HeroService,
    private readonly messageService: MessageService
  ) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: IHero) {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
