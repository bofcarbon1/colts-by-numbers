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
        {stat: "cmp", value: "63.0%"},
        {stat: "passYds", value: "2484"},
        {stat: "ints", value: "3"},
        {stat: "tds", value: "18"},
        {stat: "rtng", value: "97.2"}
        ], },
      {id: "1", name: "DeForest Buckner", position: "DT", age: "26",
      note: "Leading the Colts in sacks in 2021.",
      keystats: [
        {stat: "sacks", value: "4.5"},
        {stat: "solo", value: "24"},
        {stat: "ff", value: "0"}
        ], },
      {id: "2", name: "Bobby Okereke", position: "LB", age: "25",
      note: "Getting his share of tackles in 2021",
      keystats: [
        {stat: "solo", value: "62"},
        {stat: "sack", value: "1"}
        ], }
    ];
  tops = [
      {id: "0", name: "Jonathon Taylor", position: "RB", age: "25",
      note: "A stud in 2021. Rushing, receiving just about everywhere.",
      keystats: [
        {stat: "run atts", value: "193"},
        {stat: "run yds", value: "1122" },
        {stat: "avg yds", value: "5.8" },
        {stat: "tds", value: "13" },
        {stat: "rec atts", value: "38"},
        {stat: "rec yds", value: "322"},
        {stat: "y/r", value: "10.1"}
        ], },
      {id: "1", name: "Kenny Moore", position: "CB", age: "26",
        note: "Leading the Colts in solo tackles.",
        keystats: [
          {stat: "sacks", value: "1"},
          {stat: "solo", value: "58" },
          {stat: "int", value: "3" }
          ], },
      {id: "2", name: "Michael Pittman", position: "WR", age: "24",
      note: "Leading the WR group in yds.",
      keystats: [
        {stat: "rec", value: "57"},
        {stat: "yds", value: "752"},
        {stat: "tds", value: "5"},
        {stat: "y/r", value: "13"}
        ], }
    ];
  rookies = [
    {id: "0", name: "Kylen Granson", position: "TE", age: "21",
    note: "Out of Charleston.",
    keystats: [
      {stat: "rec", value: "7"},
      {stat: "recYds", value: "77"},
      {stat: "avg", value: "10"},
      {stat: "td", value: "0"}
      ], },
    {id: "1", name: "Kwitty Paye", position: "DE", age: "22",
    note: "Out of Michigan, 6.2 261-pound, figures to make a big impact on the pass rush game.",
    keystats: [
      {stat: "solo", value: "11"},
      {stat: "sacks", value: "2"},
      {stat: "fr", value: "2"},
      {stat: "ff", value: "1"}
      ], },
    {id: "2", name: "Dayo Odeyingbo", position: "DE", age: "21",
      note: "Out of Vanderbilt, 6.6 276-pound, recently activated.",
      keystats: [
        {stat: "solo", value: "3"},
        {stat: "sacks", value: "0.5"},
        {stat: "ff", value: "1"}
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
