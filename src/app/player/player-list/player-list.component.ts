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
        {stat: "cmp", value: "66%"}, 
        {stat: "passYds", value: "4,615"}, 
        {stat: "ints", value: "20"},
        {stat: "tds", value: "23"},
        {stat: "rtng", value: "88.5"}
        ], },
      {id: "1", name: "TY Hilton", position: "WR", age: "30",
      note: "Multiple All Pro mostly with Indianapolis Colts. Looking to bounce back from injuries in 2019. ",
      keystats: [
        {stat: "rec", value: "45"}, 
        {stat: "recYds", value: "501"},
        {stat: "avg", value: "11"},
        {stat: "lng", value: "35"},
        {stat: "td", value: "5"}
        ], },
      {id: "2", name: "Deforest Buckner", position: "DB", age: "27",
      note: "Former All Pro with San Fransisco 49ers. Acquired in deal for 2020 1st round draft pick", 
      keystats: [
        {stat: "takles", value: "62"},
        {stat: "sacks", value: "7.5"},
        {stat: "ints", value: "0"}
        ], }
    ];
  tops = [
      {id: "0", name: "Darius Leonard", position: "DB", age: "25",
      note: "Former Defensive Rookie of the Year and All Pro. Always bringing it.",
      keystats: [
        {stat: "takles", value: "71"},
        {stat: "sacks", value: "5"},
        {stat: "ints", value: "5"}
        ], },
      {id: "1", name: "Justin Houston", position: "DE", age: "31",
      note: "Led the team with 11 sacks in 2019. Expect another productive season from him.", 
      keystats: [
        {stat: "sacks", value: "11"}
        ], },
      {id: "2", name: "Marlin Mack", position: "RB", age: "24",
      note: "In 2019 1000+ yard season. Looks to have another promising season", 
      keystats: [
        {stat: "rushAtt", value: "247"},
        {stat: "rushYds", value: "1,091"},
        {stat: "td", value: "8"}
        ], }    
    ];
  rookies = [
    {id: "0", name: "Michael Pittman Jr.", position: "WR", age: "22",
    note: "At USC second team All-American standing tall at 6.4.", 
    keystats: [
      {stat: "rec", value: "0"},
      {stat: "recYds", value: "0"}, 
      {stat: "avg", value: "0"},
      {stat: "lng", value: "0"},
      {stat: "td", value: "0"}
      ], },
    {id: "1", name: "Jonathon Taylor", position: "RB", age: "21",
    note: "At Wisconson No. 6 all time rusher in the NCAA and first player to rush for more than 6,000 yards in a three-year span.", 
    keystats: [
      {stat: "rushAtt", value: "0"},
      {stat: "rushYds", value: "0"},
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
