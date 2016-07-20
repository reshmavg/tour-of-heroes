import { Component } from '@angular/core';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { Hero } from './shared/hero.model';

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HeroDetailComponent]
})
export class AppComponent {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  public heroes = HEROES;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

}
