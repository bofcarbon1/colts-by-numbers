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
      {id: "0", name: "Matt Ryan", position: "QB", age: "37",
      note: "Wentz completes first season with Colts.",
      keystats: [
        {stat: "cmp", value: "64%"},
        {stat: "passYds", value: "352"},
        {stat: "ints", value: "1"},
        {stat: "tds", value: "1"},
        {stat: "rtng", value: "83.1"}
        ], },
      {id: "1", name: "DeForest Buckner", position: "DT", age: "26",
      note: "Leading the Colts in sacks in 2021.",
      keystats: [
        {stat: "sacks", value: "0.0"},
        {stat: "solo", value: "2"},
        {stat: "ff", value: "0"}
        ], },
      {id: "2", name: "Stephon Gilmore", position: "CB", age: "31",
      note: "The elite defender joins the Colts in 2022",
      keystats: [
        {stat: "solo", value: "3"},
        {stat: "int", value: "0"}
        ], }
    ];
  tops = [
      {id: "0", name: "Jonathan Taylor", position: "RB", age: "25",
      note: "A stud in 2021. Rushing, receiving just about everywhere.",
      keystats: [
        {stat: "run atts", value: "31"},
        {stat: "run yds", value: "161" },
        {stat: "avg yds", value: "5.2" },
        {stat: "tds", value: "1" }
        ], },
      {id: "1", name: "Kwitty Paye", position: "CB", age: "23",
        note: "Leading the Colts in solo tackles.",
        keystats: [
          {stat: "sacks", value: "2"},
          {stat: "solo", value: "6" }
          ], },
      {id: "2", name: "Michael Pittman", position: "WR", age: "24",
      note: "Leading the WR group in yds.",
      keystats: [
        {stat: "rec", value: "9"},
        {stat: "yds", value: "121"},
        {stat: "tds", value: "1"},
        {stat: "y/r", value: "13.4"}
        ], }
    ];
  rookies = [
    {id: "0", name: "Alec Pierce", position: "WR", age: "22",
    note: "Out of Cincinnati looks very promising.",
    keystats: [
      {stat: "rec", value: "0"},
      {stat: "recYds", value: "0"},
      {stat: "avg", value: "0"},
      {stat: "td", value: "0"}
      ], },
    {id: "1", name: "Nick Cross", position: "S", age: "21",
    note: "Out of Maryland great speed and coerage looks to make his mark in the NFL.",
    keystats: [
      {stat: "solo", value: "4"},
      {stat: "int", value: "4"}
      ], },
    {id: "2", name: "Bernhard Raimann", position: "T", age: "25",
      note: "Out of Central Michigan getting some early plaing time at LT.",
      keystats: [
        {stat: "games", value: "1"}
        ], }
  ]
  displayedColumns: string[] = ['name', 'position', 'info'];

  public imageObject;

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.imageObject = [
      {
        image: '../../assets/images/MRyan.jfif',
        thumbImage:'../../assets/images/MRyan.jfif',
        title: 'Matt Ryan 2022 Colts QB'
      },
      {
        image: '../../assets/images/stats/ryan_2022_pass_ratings_graph_img.svg',
        thumbImage:'../../assets/images/stats/ryan_2022_pass_ratings_graph_img.svg',
        title: 'Ryan 2022 Passer Rating'
      },
      {
        image: '../../assets/images/stats/wentz_2021_pass_ratings_graph_img.svg',
        thumbImage:'../../assets/images/stats/wentz_2021_pass_ratings_graph_img.svg',
        title: 'Wentz 2021 Passer Rating'
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
