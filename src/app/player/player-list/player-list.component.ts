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
        {stat: "cmp", value: "70.8%"}, 
        {stat: "passYds", value: "1,227"}, 
        {stat: "ints", value: "5"},
        {stat: "tds", value: "4"},
        {stat: "rtng", value: "88.7"},
        {stat: "QBR", value: "59.4"}
        ], },
      {id: "1", name: "Xavier Rhodes", position: "CB", age: "30",
      note: "The once Pro Bowl player had 2 big interceptions against the Jets in game 3. ",
      keystats: [
        {stat: "int", value: "2"},
        {stat: "solo", value: "7"},
        {stat: "pd", value: "5"}        
        ], },
      {id: "2", name: "Deforest Buckner", position: "DB", age: "27",
      note: "Former All Pro with San Fransisco 49ers. Acquired in deal for 2020 1st round draft pick", 
      keystats: [
        {stat: "takles", value: "23"},
        {stat: "sacks", value: "1.5"},
        {stat: "assists", value: "10"},
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
      {id: "1", name: "Moe Allie-Cox", position: "TE", age: "27",
        note: "Another TD in game 4. Keeps making a strong argument for TE1.",
        keystats: [
          {stat: "rec", value: "12"}, 
          {stat: "recYds", value: "194"},
          {stat: "avg", value: "17.6"},
          {stat: "lng", value: "45"},
          {stat: "td", value: "2"}
          ], },
      {id: "2", name: "Anthony Walker", position: "LB", age: "25",
      note: "Always dependable on defense", 
      keystats: [
        {stat: "tackles", value: "32"},
        {stat: "assists", value: "7"},
        {stat: "sacks", value: "0"},
        {stat: "ints", value: "1"}
        ], }        
    ];
  rookies = [
    {id: "0", name: "Rodrigo Blakenship", position: "K", age: "23",
    note: "At Georgia undrafted free agent nicknamed Hot Rod", 
    keystats: [
      {stat: "fg%", value: "88.2"},
      {stat: "xp%", value: "100.0"}, 
      {stat: "lng", value: "44"},
      {stat: "pts", value: "56"}      
      ], },
    {id: "1", name: "Jonathon Taylor", position: "RB", age: "21",
    note: "At Wisconson No. 6 all time rusher in the NCAA and first player to rush for more than 6,000 yards in a three-year span.", 
    keystats: [
      {stat: "rushAtt", value: "77"},
      {stat: "rushYds", value: "307"},
      {stat: "avg", value: "4.0"},
      {stat: "lng", value: "16"},
      {stat: "td", value: "3"}
      ], },
    {id: "2", name: "Julian Blackmon", position: "S", age: "22",
    note: "Out of Utah, 6.0 187-pound, has been thrown into play earlier than expected due to the loss of Malik Hooker.", 
    keystats: [
      {stat: "tackles", value: "8"},
      {stat: "FF", value: "0"},
      {stat: "solo", value: "7"}, 
      {stat: "int", value: "1"},
      {stat: "pd", value: "5"}
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
