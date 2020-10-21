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
        {stat: "cmp", value: "69.7%"}, 
        {stat: "passYds", value: "1,598"}, 
        {stat: "ints", value: "6"},
        {stat: "tds", value: "7"},
        {stat: "rtng", value: "93"},
        {stat: "QBR", value: "64.7"}
        ], },
      {id: "1", name: "Xavier Rhodes", position: "CB", age: "30",
      note: "The once Pro Bowl player had 2 big interceptions against the Jets in game 3. ",
      keystats: [
        {stat: "int", value: "2"},
        {stat: "solo", value: "10"},
        {stat: "pd", value: "5"}        
        ], },
      {id: "2", name: "Deforest Buckner", position: "DB", age: "27",
      note: "Former All Pro with San Fransisco 49ers. Acquired in deal for 2020 1st round draft pick", 
      keystats: [
        {stat: "takles", value: "28"},
        {stat: "sacks", value: "2.5"},
        {stat: "assists", value: "17"},
        {stat: "ints", value: "0"}
        ], }
    ];
  tops = [
      {id: "0", name: "Darius Leonard", position: "DB", age: "25",
      note: "Former Defensive Rookie of the Year and All Pro. Always bringing it.",
      keystats: [
        {stat: "takles", value: "27"},
        {stat: "assists", value: "10" },
        {stat: "sacks", value: "0"},
        {stat: "ints", value: "0"}
        ], },
      {id: "1", name: "TY Hilton", position: "WR", age: "30",
        note: "Four straight Pro Bowls from 2014 to 2018.",
        keystats: [
          {stat: "rec", value: "20"}, 
          {stat: "recYds", value: "242"},
          {stat: "avg", value: "12.1"},
          {stat: "lng", value: "28"},
          {stat: "td", value: "0"}
          ], },
      {id: "2", name: "Anthony Walker", position: "LB", age: "25",
      note: "Always dependable on defense", 
      keystats: [
        {stat: "tackles", value: "39"},
        {stat: "assists", value: "7"},
        {stat: "sacks", value: "0"},
        {stat: "ints", value: "1"}
        ], }        
    ];
  rookies = [
    {id: "0", name: "Rodrigo Blakenship", position: "K", age: "23",
    note: "At Georgia undrafted free agent nicknamed Hot Rod", 
    keystats: [
      {stat: "fg%", value: "88.9"},
      {stat: "xp%", value: "100.0"}, 
      {stat: "lng", value: "44"},
      {stat: "pts", value: "63"}      
      ], },
    {id: "1", name: "Jonathon Taylor", position: "RB", age: "21",
    note: "At Wisconson No. 6 all time rusher in the NCAA and first player to rush for more than 6,000 yards in a three-year span.", 
    keystats: [
      {stat: "rushAtt", value: "89"},
      {stat: "rushYds", value: "367"},
      {stat: "avg", value: "4.1"},
      {stat: "lng", value: "21"},
      {stat: "td", value: "3"}
      ], },
    {id: "2", name: "Julian Blackmon", position: "S", age: "22",
    note: "Out of Utah, 6.0 187-pound, has been thrown into play earlier than expected due to the loss of Malik Hooker.", 
    keystats: [
      {stat: "tackles", value: "10"},
      {stat: "FF", value: "0"},
      {stat: "solo", value: "9"}, 
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
