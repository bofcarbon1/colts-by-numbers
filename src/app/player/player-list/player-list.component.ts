import { Component, OnInit, ViewChild } from '@angular/core';
import { Player } from '../player';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogBodyComponent } from '../../dialog-body/dialog-body.component';

@Component({
  selector: 'app-player',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

  selectedPlayer: Player;
  feedback: any = {type: 'info', message: ''};
  player: Player;
  //players: Player[];  
  players = [ 
    {id: "0", name: "Phillip Rivers", position: "QB", age: "38", 
      bio: "2018 Pro Bowl selection played previously with the San Diego Chargers. New adventures with the Colts."},
      {id: "1", name: "TY Hilton", position: "WR", age: "30",
      bio: "Multiple All Pro mostly with Indianapolis Colts. Looking to bounce back from injuries in 2019. "},
      {id: "2", name: "Marlin Mack", position: "RB", age: "24",
      bio: "In 2019 1000+ yard season. Looks to have another promising season"},
      {id: "3", name: "Darius Leonard", position: "DB", age: "25",
      bio: "Former Defensive Rookie of the Year and All Pro. Always bringing it."},
      {id: "4", name: "Deforest Buckner", position: "DB", age: "27",
      bio: "Former All Pro with San Fransisco 49ers. Acquired in deal for 2020 1st round draft pick"}
    ];
  displayedColumns: string[] = ['name', 'position', 'info'];
  
  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
     //console.log("this.players: ", this.players);
  }

  openDialog(selected: Player) {
    const dialogConfig = new MatDialogConfig();    
    
    //User cannot close the dialog outside of the dialog window
    dialogConfig.disableClose = true;
    
    //you can override the positioning the dialog this way
    //dialogConfig.position = {
    //  'top': '0',
    //  left: '0'
    //}

    //pass data as an object
    dialogConfig.data  = selected;
    const dialogResponse = this.matDialog.open(DialogBodyComponent, dialogConfig);
    //subscribe to after close of dialog and receive response
    dialogResponse.afterClosed().subscribe (
      data => console.log("player-list: openDialog: data: ", data.showPlayerStats)
    );
  }
  
  close() {
    this.matDialog.closeAll();
  }

  onInfoClick(selected: Player) {
    event.preventDefault();
    event.stopPropagation();
    this.openDialog(selected);    
  }

}
