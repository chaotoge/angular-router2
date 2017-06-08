/**
 * Created by @chaotoge on 2017/6/8.
 */
import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { HeroListComponent }    from './hero-list.component';
import { HeroDetailComponent }  from './hero-detail.component';

const heroesRoutes: Routes = [
  { path: 'hero/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroListComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class  HeroRoutingModule  {}
