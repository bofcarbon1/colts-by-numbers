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
        {stat: "cmp", value: "78.3%"}, 
        {stat: "passYds", value: "363"}, 
        {stat: "ints", value: "2"},
        {stat: "tds", value: "1"},
        {stat: "rtng", value: "88.7"},
        {stat: "QBR", value: "56.2"}
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
        {stat: "sacks", value: "0"},
        {stat: "ints", value: "0"}
        ], }
    ];
  tops = [
      {id: "0", name: "Darius Leonard", position: "DB", age: "25",
      note: "Former Defensive Rookie of the Year and All Pro. Always bringing it.",
      keystats: [
        {stat: "takles", value: "9"},
        {stat: "sacks", value: "0"},
        {stat: "ints", value: "0"}
        ], },
      {id: "1", name: "Parris Campbell", position: "WR", age: "23",
        note: "2nd season with Indianapolis Colts. Looking good after injuries in 2019. ",
        keystats: [
          {stat: "rec", value: "6"}, 
          {stat: "recYds", value: "71"},
          {stat: "avg", value: "11.8"},
          {stat: "lng", value: "21"},
          {stat: "td", value: "0"}
          ], },
      {id: "2", name: "Anthony Walker", position: "LB", age: "25",
      note: "2019 leader in tackles is expected to be right beside Darius Leonard in numbers as well as on the field.", 
      keystats: [
        {stat: "takles", value: "7"},
        {stat: "sacks", value: "0"},
        {stat: "ints", value: "0"}
        ], }        
    ];
  rookies = [
    {id: "0", name: "Michael Pittman Jr.", position: "WR", age: "22",
    note: "At USC second team All-American standing tall at 6.4.", 
    keystats: [
      {stat: "rec", value: "2"},
      {stat: "recYds", value: "10"}, 
      {stat: "avg", value: "5"},
      {stat: "lng", value: "5"},
      {stat: "td", value: "0"}
      ], },
    {id: "1", name: "Jonathon Taylor", position: "RB", age: "21",
    note: "At Wisconson No. 6 all time rusher in the NCAA and first player to rush for more than 6,000 yards in a three-year span.", 
    keystats: [
      {stat: "rushAtt", value: "9"},
      {stat: "rushYds", value: "22"},
      {stat: "rec", value: "6"},
      {stat: "recYds", value: "67"},
      {stat: "lng", value: "35"},
      {stat: "td", value: "0"}
      ], },
    {id: "2", name: "Dezmon Patmon", position: "WR", age: "22",
    note: "At Washington State 6-foot-4, 225-pound, 58 receptions for 762 yards (13.1 yards per reception) and eight touchdowns, finishing fourth in the Pac-12 in receiving scores.", 
    keystats: [
      {stat: "rec", value: "0"},
      {stat: "recYds", value: "0"}, 
      {stat: "avg", value: "0"},
      {stat: "lng", value: "0"},
      {stat: "td", value: "0"}
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
