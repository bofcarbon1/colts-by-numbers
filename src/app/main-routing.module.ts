import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { ProjectComponent } from './work/project/project.component';
import { HomeColtsComponent } from './home-colts/home-colts.component';
import { PlayerListComponent } from './player/player-list/player-list.component';
import { TeamComponent } from './team/team.component';
import { OffenseComponent } from './team/offense/offense.component';
import { DefenseComponent } from './team/defense/defense.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayerOffenseComponent } from './player/offense/offense.component';
import { PlayerDefenseComponent } from './player/defense/defense.component';

const routes: Routes = [
  //{ path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home',  component: HomeComponent  },
  { path: 'work',  component: WorkComponent},
  { path: 'project',  component: ProjectComponent},
  { path: 'home-colts', component: HomeColtsComponent},
  { path: 'player', component: PlayerListComponent },
  { path: 'team', component: TeamComponent },
  { path: 'team/offense', component: OffenseComponent },
  { path: 'player/offense', component: PlayerOffenseComponent},
  { path: 'team/defense', component: DefenseComponent },
  { path: 'player/defense', component: PlayerDefenseComponent}
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
