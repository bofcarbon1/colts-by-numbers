import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayerListComponent } from './player/player-list/player-list.component';
import { TeamComponent } from './team/team.component';
import { OffenseComponent } from './team/offense/offense.component';
import { DefenseComponent } from './team/defense/defense.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  //{ path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home',  component: HomeComponent  },
  { path: 'player', component: PlayerListComponent },
  { path: 'team', component: TeamComponent },
  { path: 'team/offense', component: OffenseComponent },
  { path: 'team/defense', component: DefenseComponent }               
];

@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [  
  ],
  exports: [RouterModule]
})
export class MainRoutingModule { }
