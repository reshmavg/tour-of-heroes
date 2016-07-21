import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';


import { HeroService } from './shared/hero.service';
import { HeroesComponent } from './heroes/heroes.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HeroesComponent, ROUTER_DIRECTIVES],
  providers: [HeroService]
})
export class AppComponent {
  title = 'Tour of Heroes';
}
