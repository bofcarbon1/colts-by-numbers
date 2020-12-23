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
        {stat: "cmp", value: "68.7%"}, 
        {stat: "passYds", value: "3,735"}, 
        {stat: "ints", value: "9"},
        {stat: "tds", value: "22"},
        {stat: "rtng", value: "99"},
        {stat: "QBR", value: "65.5"}
        ], },
      {id: "1", name: "Kenny Moore II", position: "CB", age: "25",
      note: "Every season exceptional play on defense.",
      keystats: [
        {stat: "int", value: "4"},
        {stat: "tackles", value: "59"}, 
        {stat: "solo", value: "53"}                
        ], },
      {id: "2", name: "Deforest Buckner", position: "DB", age: "27",
      note: "Former All Pro with San Fransisco 49ers. Acquired in deal for 2020 1st round draft pick", 
      keystats: [
        {stat: "takles", value: "52"},
        {stat: "sacks", value: "7.5"},
        {stat: "solo", value: "33"},
        {stat: "fr", value: "1"},
        {stat: "ff", value: "2"}
        ], }
    ];
  tops = [
      {id: "0", name: "Darius Leonard", position: "DB", age: "25",
      note: "Former Defensive Rookie of the Year and All Pro. Looking All Pro again in 2020.",
      keystats: [
        {stat: "takles", value: "109"},
        {stat: "solo", value: "74" },
        {stat: "sacks", value: "2"}        
        ], },
      {id: "1", name: "Justin Houston", position: "DE", age: "31",
        note: "3 sacks against the Texans in game 12.",
        keystats: [
          {stat: "sacks", value: "7.5"}, 
          {stat: "tackles", value: "22" },
          {stat: "solo", value: "17"}          
          ], },
      {id: "2", name: "TY Hilton", position: "WR", age: "31",
      note: "Former Pro Bowler starting to click with Phillip Rivers.", 
      keystats: [
        {stat: "rec", value: "50"},
        {stat: "yds", value: "675"},
        {stat: "tds", value: "4"},
        {stat: "avg", value: "13.5"}        
        ], }        
    ];
  rookies = [
    {id: "0", name: "Jonathon Taylor", position: "RB", age: "23",
    note: "Has emerged as a solid starting RB in the absense of Marlon Mack.", 
    keystats: [
      {stat: "att", value: "184"},
      {stat: "yds", value: "842"},
      {stat: "avg", value: "4.6"}, 
      {stat: "tds", value: "7"},
      {stat: "lng", value: "62"}      
      ], },
    {id: "1", name: "Michael Pittman", position: "WR", age: "21",
    note: "Out of USC returned from the IR got 101 receving yards against the Titans in game 9.", 
    keystats: [
      {stat: "rec", value: "35"},
      {stat: "recYds", value: "437"},
      {stat: "avg", value: "12.5"},
      {stat: "lng", value: "45"},
      {stat: "td", value: "1"}
      ], },
    {id: "2", name: "Julian Blackmon", position: "S", age: "22",
    note: "Out of Utah, 6.0 187-pound, has been thrown into play earlier than expected due to the loss of Malik Hooker.", 
    keystats: [
      {stat: "tackles", value: "35"},
      {stat: "FF", value: "1"},
      {stat: "solo", value: "28"}, 
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
