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
        {stat: "cmp", value: "62.2%"},
        {stat: "passYds", value: "1926"},
        {stat: "ints", value: "3"},
        {stat: "tds", value: "14"},
        {stat: "rtng", value: "96.3"}
        ], },
      {id: "1", name: "DeForest Buckner", position: "DT", age: "26",
      note: "Leading the Colts in sacks in 2021.",
      keystats: [
        {stat: "sacks", value: "4"},
        {stat: "solo", value: "21"},
        {stat: "ff", value: "0"}
        ], },
      {id: "2", name: "Bobby Okereke", position: "LB", age: "25",
      note: "Getting his share of tackles in 2021",
      keystats: [
        {stat: "solo", value: "43"},
        {stat: "sack", value: "1"}
        ], }
    ];
  tops = [
      {id: "0", name: "Jonathon Taylor", position: "RB", age: "25",
      note: "A stud in 2021. Rushing, receiving just about everywhere.",
      keystats: [
        {stat: "run atts", value: "105"},
        {stat: "run yds", value: "579" },
        {stat: "avg yds", value: "5.5" },
        {stat: "tds", value: "5" },
        {stat: "rec atts", value: "18"},
        {stat: "rec yds", value: "213"},
        {stat: "y/r", value: "11.0"}
        ], },
      {id: "1", name: "Kenny Moore", position: "CB", age: "26",
        note: "Leading the Colts in solo tackles.",
        keystats: [
          {stat: "sacks", value: "1"},
          {stat: "solo", value: "45" },
          {stat: "int", value: "2" }
          ], },
      {id: "2", name: "Michael Pittman", position: "WR", age: "24",
      note: "Leading the WR group in yds.",
      keystats: [
        {stat: "rec", value: "45"},
        {stat: "yds", value: "594"},
        {stat: "tds", value: "4"},
        {stat: "avg", value: "13"}
        ], }
    ];
  rookies = [
    {id: "0", name: "Michael Strachan", position: "WR", age: "21",
    note: "Out of Charleston.",
    keystats: [
      {stat: "rec", value: "2"},
      {stat: "recYds", value: "26"},
      {stat: "avg", value: "13"},
      {stat: "lng", value: "16"},
      {stat: "td", value: "0"}
      ], },
    {id: "1", name: "Kwitty Paye", position: "DE", age: "22",
    note: "Out of Michigan, 6.2 261-pound, figures to make a big impact on the pass rush game.",
    keystats: [
      {stat: "solo", value: "9"},
      {stat: "sacks", value: "0"},
      {stat: "fr", value: "2"}
      ], },
    {id: "2", name: "Dayo Odeyingbo", position: "DE", age: "21",
      note: "Out of Vanderbilt, 6.6 276-pound, should be ready by game 8.",
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
