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
      note: "MattY Ice joins the Colts in 2022.",
      keystats: [
        {stat: "cmp", value: "170"},
        {stat: "passYds", value: "1765"},
        {stat: "ints", value: "7"},
        {stat: "tds", value: "8"},
        {stat: "rtng", value: "86.2"}
        ], },
      {id: "1", name: "Zaire Franklin", position: "LB", age: "26",
      note: "Leading the Colts in total tackles in 2022.",
      keystats: [
        {stat: "sacks", value: "0.0"},
        {stat: "solo", value: "41"},
        {stat: "tfl", value: "3"}
        ], },
      {id: "2", name: "Stephon Gilmore", position: "CB", age: "31",
      note: "The elite defender joins the Colts in 2022",
      keystats: [
        {stat: "solo", value: "20"},
        {stat: "int", value: "1"}
        ], }
    ];
  tops = [
      {id: "0", name: "Jonathan Taylor", position: "RB", age: "25",
      note: "A stud in 2021. Rushing, receiving just about everywhere.",
      keystats: [
        {stat: "run atts", value: "81"},
        {stat: "run yds", value: "328" },
        {stat: "avg yds", value: "4.0" },
        {stat: "tds", value: "1" }
        ], },
      {id: "1", name: "Kwitty Paye", position: "DE", age: "24",
        note: "Leading the Colts in solo tackles.",
        keystats: [
          {stat: "sacks", value: "3"},
          {stat: "solo", value: "12" }
          ], },
      {id: "2", name: "Michael Pittman", position: "WR", age: "24",
      note: "Leading the WR group in yds.",
      keystats: [
        {stat: "rec", value: "38"},
        {stat: "yds", value: "417"},
        {stat: "tds", value: "1"},
        {stat: "y/r", value: "11.0"}
        ], }
    ];
  rookies = [
    {id: "0", name: "Alec Pierce", position: "WR", age: "22",
    note: "Out of Cincinnati looks very promising.",
    keystats: [
      {stat: "rec", value: "18"},
      {stat: "recYds", value: "271"},
      {stat: "avg", value: "15.1"},
      {stat: "td", value: "1"}
      ], },
    {id: "1", name: "Jelani Woods", position: "TE", age: "23",
    note: "Out of Oklahoma State the big man making fast adjusments to the NFL.",
    keystats: [
      {stat: "rec", value: "5"},
      {stat: "recYds", value: "73"},
      {stat: "avg", value: "14.5"},
      {stat: "td", value: "3"}
      ], },
    {id: "2", name: "Rodney Thomas II", position: "LB", age: "24",
      note: "Out of Yale in the Ivy League adopting quickly to the NFL level.",
      keystats: [
        {stat: "solo", value: "11"},
        {stat: "int", value: "1"}
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
