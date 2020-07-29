import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerListComponent } from '../player/player-list/player-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule, 
    MatSort    
  ],  
  declarations: [
    PlayerListComponent    
  ],
  providers: [],
  exports: []
})
export class PlayerModule { }
