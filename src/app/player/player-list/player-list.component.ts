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
      {id: "0", name: "Sam Ehlinger", position: "QB", age: "24",
      note: "Out of the University of Texas.",
      keystats: [
        {stat: "cmp", value: "17"},
        {stat: "passYds", value: "201"},
        {stat: "ints", value: "0"},
        {stat: "tds", value: "0"},
        {stat: "rtng", value: "100.1"}
        ], },
      {id: "1", name: "Zaire Franklin", position: "LB", age: "26",
      note: "Leading the Colts in total tackles in 2022.",
      keystats: [
        {stat: "sacks", value: "0.0"},
        {stat: "solo", value: "51"},
        {stat: "tfl", value: "5"}
        ], },
      {id: "2", name: "Grover Stewart", position: "CB", age: "31",
      note: "Grover is always in the trenches for the Colts",
      keystats: [
        {stat: "solo", value: "30"},
        {stat: "sacks", value: "2"},
        {stat: "tfl", value: "4"}
        ], }
    ];
  tops = [
      {id: "0", name: "Jonathan Taylor", position: "RB", age: "25",
      note: "A stud in 2021. Rushing, receiving just about everywhere.",
      keystats: [
        {stat: "run atts", value: "107"},
        {stat: "run yds", value: "462" },
        {stat: "avg yds", value: "4.4" },
        {stat: "tds", value: "1" }
        ], },
      {id: "1", name: "Yannick Nqakoue", position: "DE", age: "27",
        note: "Leading the Colts in sacks.",
        keystats: [
          {stat: "sacks", value: "4"},
          {stat: "solo", value: "15" }
          ], },
      {id: "2", name: "Michael Pittman", position: "WR", age: "24",
      note: "Leading the WR group in yds.",
      keystats: [
        {stat: "rec", value: "51"},
        {stat: "yds", value: "528"},
        {stat: "tds", value: "1"},
        {stat: "y/r", value: "10.4"}
        ], }
    ];
  rookies = [
    {id: "0", name: "Alec Pierce", position: "WR", age: "22",
    note: "Out of Cincinnati having a great rookie year.",
    keystats: [
      {stat: "rec", value: "24"},
      {stat: "recYds", value: "373"},
      {stat: "avg", value: "15.3"},
      {stat: "td", value: "1"}
      ], },
    {id: "1", name: "Jelani Woods", position: "TE", age: "23",
    note: "Out of Oklahoma State the big man making fast adjusments to the NFL.",
    keystats: [
      {stat: "rec", value: "6"},
      {stat: "recYds", value: "77"},
      {stat: "avg", value: "12.8"},
      {stat: "td", value: "3"}
      ], },
    {id: "2", name: "Rodney Thomas II", position: "LB", age: "24",
      note: "Out of Yale in the Ivy League adopting quickly to the NFL level.",
      keystats: [
        {stat: "solo", value: "13"},
        {stat: "int", value: "1"}
        ], }
  ]
  displayedColumns: string[] = ['name', 'position', 'info'];

  public imageObject;

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.imageObject = [
      {
        image: '../../assets/images/SamEhlinger.jfif',
        thumbImage:'../../assets/images/SamEhlinger.jfif',
        title: 'Sam Ehlinger 2022 Colts QB'
      },
      {
        image: '../../assets/images/stats/ehlinger_2022_pass_ratings_graph_img.svg',
        thumbImage:'../../assets/images/stats/ehlinger_2022_pass_ratings_graph_img.svg',
        title: 'Ehlinger 2022 Passer Rating'
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
