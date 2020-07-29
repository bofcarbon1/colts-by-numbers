import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { MainRoutingModule } from './main-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button'
import { MatDividerModule } from '@angular/material/divider';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import { HomeComponent } from './home/home.component';
import { PlayerListComponent } from './player/player-list/player-list.component';
import { TeamComponent } from './team/team.component';
import { OffenseComponent } from './team/offense/offense.component';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayerListComponent,
    DialogBodyComponent,
    TeamComponent,
    OffenseComponent      
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MainRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
    MatDialogModule,
    MatButtonModule,
    MatDividerModule,
    NgImageSliderModule
                
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
