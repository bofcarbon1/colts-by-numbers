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
        {stat: "cmp", value: "77.5%"}, 
        {stat: "passYds", value: "577"}, 
        {stat: "ints", value: "3"},
        {stat: "tds", value: "2"},
        {stat: "rtng", value: "92.3"},
        {stat: "QBR", value: "46.2"}
        ], },
      {id: "1", name: "Denico Autry", position: "DE", age: "30",
      note: "7th season in the NFL. Starting out strong in 2020 with 2 sacks in game 1. ",
      keystats: [
        {stat: "sacks", value: "2"}        
        ], },
      {id: "2", name: "Deforest Buckner", position: "DB", age: "27",
      note: "Former All Pro with San Fransisco 49ers. Acquired in deal for 2020 1st round draft pick", 
      keystats: [
        {stat: "takles", value: "6"},
        {stat: "sacks", value: "1.5"},
        {stat: "ints", value: "0"}
        ], }
    ];
  tops = [
      {id: "0", name: "Darius Leonard", position: "DB", age: "25",
      note: "Former Defensive Rookie of the Year and All Pro. Always bringing it.",
      keystats: [
        {stat: "takles", value: "16"},
        {stat: "sacks", value: "0"},
        {stat: "ints", value: "0"}
        ], },
      {id: "1", name: "Moe Allie-Cox", position: "TE", age: "27",
        note: "3rd season with the Colts. Stepping up for Jack Doyle/Trey Burton and making a strong argument for a TE1. ",
        keystats: [
          {stat: "rec", value: "7"}, 
          {stat: "recYds", value: "131"},
          {stat: "avg", value: "18.7"},
          {stat: "lng", value: "33"},
          {stat: "td", value: "0"}
          ], },
      {id: "2", name: "Anthony Walker", position: "LB", age: "25",
      note: "2019 leader in tackles is expected to be right beside Darius Leonard in numbers as well as on the field.", 
      keystats: [
        {stat: "takles", value: "8"},
        {stat: "sacks", value: "0"},
        {stat: "ints", value: "0"}
        ], }        
    ];
  rookies = [
    {id: "0", name: "Michael Pittman Jr.", position: "WR", age: "22",
    note: "At USC second team All-American standing tall at 6.4.", 
    keystats: [
      {stat: "rec", value: "6"},
      {stat: "recYds", value: "47"}, 
      {stat: "avg", value: "7.5"},
      {stat: "lng", value: "16"},
      {stat: "td", value: "0"}
      ], },
    {id: "1", name: "Jonathon Taylor", position: "RB", age: "21",
    note: "At Wisconson No. 6 all time rusher in the NCAA and first player to rush for more than 6,000 yards in a three-year span.", 
    keystats: [
      {stat: "rushAtt", value: "35"},
      {stat: "rushYds", value: "123"},
      {stat: "avg", value: "3.5"},
      {stat: "lng", value: "13"},
      {stat: "td", value: "1"}
      ], },
    {id: "2", name: "Julian Blackmon", position: "Safety", age: "22",
    note: "Out of Utah, 6.0 187-pound, has been thrown into play earlier than expected due to the loss of Malik Hooker.", 
    keystats: [
      {stat: "solo", value: "2"},
      {stat: "FF", value: "0"}, 
      {stat: "int", value: "0"},
      {stat: "pd", value: "2"}
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
      },
      { 
        image: '../../assets/images/stats/rivers_2019_qbr_stats_graph_img.svg', 
        thumbImage:'../../assets/images/stats/rivers_2019_qbr_stats_graph_img.svg', 
        title: 'Rivers 2019 QBR'
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
