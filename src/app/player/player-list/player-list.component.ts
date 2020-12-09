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
      note: "2018 Pro Bowl selection played previously with the San Diego Chargers. New adventures with the Colts.",
      keystats: [
        {stat: "cmp", value: "68.1%"}, 
        {stat: "passYds", value: "3,263"}, 
        {stat: "ints", value: "9"},
        {stat: "tds", value: "18"},
        {stat: "rtng", value: "96"},
        {stat: "QBR", value: "63"}
        ], },
      {id: "1", name: "Kenny Moore II", position: "CB", age: "25",
      note: "Every season exceptional play on defense.",
      keystats: [
        {stat: "int", value: "3"},
        {stat: "tackles", value: "54"}, 
        {stat: "solo", value: "48"}                
        ], },
      {id: "2", name: "Deforest Buckner", position: "DB", age: "27",
      note: "Former All Pro with San Fransisco 49ers. Acquired in deal for 2020 1st round draft pick", 
      keystats: [
        {stat: "takles", value: "44"},
        {stat: "sacks", value: "4.5"},
        {stat: "solo", value: "27"},
        {stat: "fr", value: "1"}
        ], }
    ];
  tops = [
      {id: "0", name: "Darius Leonard", position: "DB", age: "25",
      note: "Former Defensive Rookie of the Year and All Pro. Looking All Pro again in 2020.",
      keystats: [
        {stat: "takles", value: "86"},
        {stat: "solo", value: "57" },
        {stat: "sacks", value: "2"}        
        ], },
      {id: "1", name: "Justin Houston", position: "DE", age: "31",
        note: "3 sacks against the Texans in game 12.",
        keystats: [
          {stat: "sacks", value: "7.5"}, 
          {stat: "tackles", value: "20" },
          {stat: "solo", value: "16"}          
          ], },
      {id: "2", name: "TY Hilton", position: "WR", age: "31",
      note: "Former Pro Bowler starting to click with Phillip Rivers.", 
      keystats: [
        {stat: "rec", value: "41"},
        {stat: "yds", value: "518"},
        {stat: "tds", value: "2"},
        {stat: "avg", value: "12.6"}        
        ], }        
    ];
  rookies = [
    {id: "0", name: "Rodrigo Blakenship", position: "K", age: "23",
    note: "At Georgia undrafted free agent nicknamed Hot Rod", 
    keystats: [
      {stat: "fg%", value: "88.9"},
      {stat: "xp%", value: "93.8"}, 
      {stat: "lng", value: "44"},
      {stat: "pts", value: "102"}      
      ], },
    {id: "1", name: "Michael Pittman", position: "WR", age: "21",
    note: "Out of USC returned from the IR got 101 receving yards against the Titans in game 9.", 
    keystats: [
      {stat: "rec", value: "31"},
      {stat: "recYds", value: "376"},
      {stat: "avg", value: "12.1"},
      {stat: "lng", value: "45"},
      {stat: "td", value: "1"}
      ], },
    {id: "2", name: "Julian Blackmon", position: "S", age: "22",
    note: "Out of Utah, 6.0 187-pound, has been thrown into play earlier than expected due to the loss of Malik Hooker.", 
    keystats: [
      {stat: "tackles", value: "32"},
      {stat: "FF", value: "1"},
      {stat: "solo", value: "27"}, 
      {stat: "int", value: "2"},
      {stat: "pd", value: "6"}
      ], }
  ]    
  displayedColumns: string[] = ['name', 'position', 'info'];
  
  public imageObject;

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.imageObject = [
      { 
        image: '../../assets/images/privers2.png', 
        thumbImage:'../../assets/images/privers2.png', 
        title: 'Phillip Rivers 2020 Colts QB'
      },
      { 
        image: '../../assets/images/stats/rivers_2020_pass_ratings_graph_img.svg', 
        thumbImage:'../../assets/images/stats/rivers_2020_pass_ratings_graph_img.svg', 
        title: 'Rivers 2020 Passer Rating'
      },
      { 
        image: '../../assets/images/stats/rivers_2019_pass_ratings_graph_img.svg', 
        thumbImage:'../../assets/images/stats/rivers_2019_pass_ratings_graph_img.svg', 
        title: 'Rivers 2019 Passer Rating'
      }     
    ]
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
