import { Component, OnInit } from '@angular/core';
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
      note: "Back again as starting QB for the 2022 season.",
      keystats: [
        {stat: "cmp", value: "290"},
        {stat: "passYds", value: "2875"},
        {stat: "ints", value: "13"},
        {stat: "tds", value: "13"},
        {stat: "rtng", value: "84"}
        ], },
      {id: "1", name: "Zaire Franklin", position: "LB", age: "26",
      note: "Leading the Colts in total tackles in 2022.",
      keystats: [
        {stat: "sacks", value: "1.0"},
        {stat: "solo", value: "79"},
        {stat: "tfl", value: "9"}
        ], },
      {id: "2", name: "Grover Stewart", position: "CB", age: "31",
      note: "Grover is always in the trenches for the Colts",
      keystats: [
        {stat: "solo", value: "41"},
        {stat: "sacks", value: "3"},
        {stat: "tfl", value: "8"}
        ], }
    ];
  tops = [
      {id: "0", name: "Jonathan Taylor", position: "RB", age: "25",
      note: "A stud in 2021. Rushing, receiving just about everywhere.",
      keystats: [
        {stat: "run atts", value: "192"},
        {stat: "run yds", value: "861" },
        {stat: "yds/att", value: "4.8" },
        {stat: "tds", value: "4" }
        ], },
      {id: "1", name: "Yannick Ngakoue", position: "DE", age: "27",
        note: "Leading the Colts in sacks with a current projection of 12.",
        keystats: [
          {stat: "sacks", value: "8.5"},
          {stat: "solo", value: "14" }
          ], },
      {id: "2", name: "Michael Pittman", position: "WR", age: "24",
      note: "Leading the WR group in yds.",
      keystats: [
        {stat: "rec", value: "76"},
        {stat: "yds", value: "755"},
        {stat: "tds", value: "2"},
        {stat: "y/r", value: "10"}
        ], }
    ];
  rookies = [
    {id: "0", name: "Alec Pierce", position: "WR", age: "22",
    note: "Out of Cincinnati having a great rookie year.",
    keystats: [
      {stat: "rec", value: "32"},
      {stat: "recYds", value: "510"},
      {stat: "yds/rec", value: "15.9"},
      {stat: "td", value: "2"}
      ], },
    {id: "1", name: "Jelani Woods", position: "TE", age: "23",
    note: "Out of Oklahoma State the big man making fast adjusments to the NFL.",
    keystats: [
      {stat: "rec", value: "17"},
      {stat: "recYds", value: "205"},
      {stat: "yds/rec", value: "12.1"},
      {stat: "td", value: "3"}
      ], },
    {id: "2", name: "Rodney Thomas II", position: "LB", age: "24",
      note: "Out of Yale in the Ivy League adopting quickly to the NFL level.",
      keystats: [
        {stat: "solo", value: "20"},
        {stat: "int", value: "1"}
        ], }
  ]
  displayedColumns = ['Name', 'Position', 'Info'];

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
