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
      {id: "0", name: "Carson Wentz", position: "QB", age: "28",
      note: "Acquired in a trade with the Philidelphia Eagles. New adventures with the Colts.",
      keystats: [
        {stat: "cmp", value: "65.8%"},
        {stat: "passYds", value: "251"},
        {stat: "ints", value: "0"},
        {stat: "tds", value: "2"},
        {stat: "rtng", value: "102"}
        ], },
      {id: "1", name: "Kenny Moore II", position: "CB", age: "25",
      note: "Every season exceptional play on defense.",
      keystats: [
        {stat: "int", value: "0"},
        {stat: "tackles", value: "3"},
        {stat: "sack", value: "1"}
        ], },
      {id: "2", name: "Deforest Buckner", position: "DB", age: "27",
      note: "Former All Pro with San Fransisco 49ers. Acquired in deal for 2020 1st round draft pick",
      keystats: [
        {stat: "takles", value: "5"},
        {stat: "sacks", value: "1"},
        {stat: "fr", value: "0"},
        {stat: "ff", value: "0"}
        ], }
    ];
  tops = [
      {id: "0", name: "Jonathon Taylor", position: "RB", age: "25",
      note: "A huge year in 2020. Expected to continue that trend in 2021.",
      keystats: [
        {stat: "run atts", value: "17"},
        {stat: "run yds", value: "56" },
        {stat: "rec atts", value: "6"},
        {stat: "rec yds", value: "60"},
        {stat: "avg rec yds", value: "10"}
        ], },
      {id: "1", name: "DeForest Buckner", position: "DE", age: "31",
        note: "Looks to be discrupting offenses even more in 2021.",
        keystats: [
          {stat: "sacks", value: "1"},
          {stat: "tackles", value: "0" },
          {stat: "ff", value: "1"}
          ], },
      {id: "2", name: "Zach Pascal", position: "WR", age: "26",
      note: "Now the established veteran in the WR group. Stepping up for injured TY Hilton.",
      keystats: [
        {stat: "rec", value: "4"},
        {stat: "yds", value: "43"},
        {stat: "tds", value: "2"},
        {stat: "avg", value: "11"}
        ], }
    ];
  rookies = [
    {id: "0", name: "Michael Strachan", position: "WR", age: "21",
    note: "Out of Charleston.",
    keystats: [
      {stat: "rec", value: "2"},
      {stat: "recYds", value: "26"},
      {stat: "avg", value: "13"},
      {stat: "lng", value: "0"},
      {stat: "td", value: "0"}
      ], },
    {id: "1", name: "Kwitty Paye", position: "DE", age: "22",
    note: "Out of Michigan, 6.2 261-pound, figures to make a big impact on the pass rush game.",
    keystats: [
      {stat: "sacks", value: "0"},
      {stat: "fumb rec", value: "1"}
      ], },
    {id: "2", name: "Dayo Odeyingbo", position: "DE", age: "21",
      note: "Out of Vanderbilt, 6.6 276-pound, figures to be a fearsome dou with Kwitty Paye when he returns from injury.",
      keystats: [
        {stat: "tackles", value: "0"},
        {stat: "sacks", value: "0"}
        ], }
  ]
  displayedColumns: string[] = ['name', 'position', 'info'];

  public imageObject;

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.imageObject = [
      {
        image: '../../assets/images/05-13-Wentz.jpg',
        thumbImage:'../../assets/images/05-13-Wentz.jpg',
        title: 'Carson Wentz 2021 Colts QB'
      },
      {
        image: '../../assets/images/stats/wentz_2021_pass_ratings_graph_img.svg',
        thumbImage:'../../assets/images/stats/wentz_2021_pass_ratings_graph_img.svg',
        title: 'Wentz 2021 Passer Rating'
      },
      {
        image: '../../assets/images/stats/rivers_2020_pass_ratings_graph_img.svg',
        thumbImage:'../../assets/images/stats/rivers_2020_pass_ratings_graph_img.svg',
        title: 'Rivers 2020 Passer Rating'
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
