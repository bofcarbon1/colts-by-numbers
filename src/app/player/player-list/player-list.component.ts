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
      {id: "0", name: "Dayo Odeyingbo", position: "DE", age: "23",
      note: "In his 2nd year healthy and picking up speed.",
      keystats: [
        {stat: "sacks", value: "5"},
        {stat: "solo", value: "16"},
        {stat: "tfl", value: "4"}
        ], },
      {id: "1", name: "Zaire Franklin", position: "LB", age: "26",
      note: "Leading the Colts in total tackles in 2022.",
      keystats: [
        {stat: "sacks", value: "2"},
        {stat: "solo", value: "97"},
        {stat: "tfl", value: "10"}
        ], },
      {id: "2", name: "Grover Stewart", position: "CB", age: "31",
      note: "Grover is always in the trenches for the Colts",
      keystats: [
        {stat: "solo", value: "43"},
        {stat: "sacks", value: "4"},
        {stat: "tfl", value: "9"}
        ], }
    ];
  tops = [
      {id: "0", name: "Jonathan Taylor", position: "RB", age: "25",
      note: "A stud in 2021. Rushing, receiving just about everywhere.",
      keystats: [
        {stat: "run atts", value: "192"},
        {stat: "run yds", value: "861" },
        {stat: "yds/att", value: "4.5" },
        {stat: "tds", value: "4" }
        ], },
      {id: "1", name: "Yannick Ngakoue", position: "DE", age: "27",
        note: "Leading the Colts in sacks with a current projection of 12.",
        keystats: [
          {stat: "sacks", value: "9.5"},
          {stat: "solo", value: "18" },
          {stat: "tfl", value: "8" }
          ], },
      {id: "2", name: "Michael Pittman", position: "WR", age: "24",
      note: "Leading the WR group in yds.",
      keystats: [
        {stat: "rec", value: "96"},
        {stat: "yds", value: "895"},
        {stat: "tds", value: "3"},
        {stat: "y/r", value: "9.5"}
        ], }
    ];
  rookies = [
    {id: "0", name: "Alec Pierce", position: "WR", age: "22",
    note: "Out of Cincinnati having a great rookie year.",
    keystats: [
      {stat: "rec", value: "38"},
      {stat: "recYds", value: "551"},
      {stat: "yds/rec", value: "14.5"},
      {stat: "td", value: "2"}
      ], },
    {id: "1", name: "Jelani Woods", position: "TE", age: "23",
    note: "Out of Oklahoma State the big man making fast adjusments to the NFL.",
    keystats: [
      {stat: "rec", value: "24"},
      {stat: "recYds", value: "303"},
      {stat: "yds/rec", value: "12.6"},
      {stat: "td", value: "3"}
      ], },
    {id: "2", name: "Rodney Thomas II", position: "LB", age: "24",
      note: "Out of Yale in the Ivy League adopting quickly to the NFL level.",
      keystats: [
        {stat: "solo", value: "32"},
        {stat: "int", value: "3"}
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
